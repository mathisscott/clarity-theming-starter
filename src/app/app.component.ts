import { Component } from '@angular/core';
import { runCssVarsPolyfill } from '@clr/core';

const darkThemeStyleSheet = document.styleSheets[3];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theming';
  model = {
    field1: 'ohai',
    field2: 'howdy'
  };

  private darkThemeIsActive = true;

  toggleDarkTheme() {
    toggleStylesheet(darkThemeStyleSheet, this.darkThemeIsActive = !this.darkThemeIsActive);
    runCssVarsPolyfill();
  }
}

function toggleStylesheet(stylesheet: any, enable: boolean) {
  darkThemeStyleSheet.disabled = !enable;
}
