import { Component } from '@angular/core';
import { runCssVarsPolyfill } from '@clr/core';

const themes = {
  default: {
    '--clr-header-2-bg-color': 'hsl(209, 19%, 35%)',
    '--clr-header-font-color': 'var(--clr-color-neutral-50)',
    '--clr-btn-default-bg-color': 'transparent',
    '--clr-btn-default-border-color': 'var(--clr-color-action-600)',
    '--clr-btn-default-color': 'var(--clr-color-action-600)',
    '--clr-vertical-nav-divider-color': 'var(--clr-color-neutral-700)',
    '--clr-vertical-nav-icon-active-color': 'var(--clr-color-action-600)',
    '--clr-vertical-nav-item-color': 'var(--clr-color-neutral-700)',
    '--clr-vertical-nav-item-active-color': 'var(--clr-color-neutral-700)',
    '--clr-vertical-nav-bg-color': 'var(--clr-color-neutral-200)',
    '--clr-vertical-nav-active-bg-color': 'var(--clr-color-neutral-0)',
    '--clr-vertical-nav-hover-bg-color': 'var(--clr-color-neutral-400)',
    '--clr-vertical-nav-toggle-icon-color': 'var(--clr-color-neutral-1000)',
    '--clr-vertical-nav-trigger-divider-border-color': 'var(--clr-color-neutral-400)',
  },
  blue: {
    '--clr-header-2-bg-color': 'steelblue',
    '--clr-header-font-color': 'white',
    '--clr-btn-default-bg-color': '#0BB5FF',
    '--clr-btn-default-border-color': '#0BB5FF',
    '--clr-btn-default-color': 'white',
    '--clr-vertical-nav-divider-color': 'steelblue',
    '--clr-vertical-nav-icon-active-color': 'white',
    '--clr-vertical-nav-item-color': '#26466D',
    '--clr-vertical-nav-item-active-color': 'white',
    '--clr-vertical-nav-bg-color': '#C3E4ED',
    '--clr-vertical-nav-active-bg-color': 'steelblue',
    '--clr-vertical-nav-hover-bg-color': '#0BB5FF',
    '--clr-vertical-nav-toggle-icon-color': 'steelblue',
    '--clr-vertical-nav-trigger-divider-border-color': 'steelblue',
  },
  orange: {
    '--clr-header-2-bg-color': 'orangered',
    '--clr-header-font-color': 'white',
    '--clr-btn-default-bg-color': 'transparent',
    '--clr-btn-default-border-color': 'orangered',
    '--clr-btn-default-color': 'orangered',
    '--clr-vertical-nav-divider-color': 'sepia',
    '--clr-vertical-nav-icon-active-color': 'white',
    '--clr-vertical-nav-item-color': 'sepia',
    '--clr-vertical-nav-item-active-color': 'white',
    '--clr-vertical-nav-bg-color': '#EEE8CD',
    '--clr-vertical-nav-active-bg-color': '#8B4500',
    '--clr-vertical-nav-hover-bg-color': 'orangered',
    '--clr-vertical-nav-toggle-icon-color': 'sepia',
    '--clr-vertical-nav-trigger-divider-border-color': 'sepia',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theming';
  theme = 'default';
  model = {
    field1: 'ohai',
    field2: 'howdy',
  };
  changeTheme(theme: any) {
    switchTheme(theme);
  }
}

const themePrefix = 'custom-theme_';

function toggleExistingThemes(themeToEnable: string) {
  const themeToEnableId = themePrefix + themeToEnable;
  const themeIds = [];

  for (const theme in themes) {
    if (themes.hasOwnProperty(theme)) {
      themeIds.push(themePrefix + theme);
    }
  }

  themeIds.filter(t => t !== themeToEnableId).forEach(t => {
    const themeNode = document.getElementById(t);
    if (themeNode !== null) {
      (themeNode as any).sheet.disabled = true;
    }
  });

  if (document.getElementById(themeToEnableId) !== null) {
    (document.getElementById(themeToEnableId) as any).sheet.disabled = false;
    return true;
  }

  return false;
}

function switchTheme(toTheme: string) {
  if (toggleExistingThemes(toTheme)) {
    return;
  }

  const newStyle = document.createElement('style');
  const theme = themes[toTheme];

  document.head.appendChild(newStyle);
  newStyle.id = themePrefix + toTheme;

  const myStyles = [':root { '];
  for (const item in theme) {
    if (theme.hasOwnProperty(item)) {
      myStyles.push(item);
      myStyles.push(': ');
      myStyles.push(theme[item]);
      myStyles.push('; ');
    }
  }
  myStyles.push('}');
  newStyle.innerHTML = myStyles.join('');

  runCssVarsPolyfill();

  return toTheme;
}
