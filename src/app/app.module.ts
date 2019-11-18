import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityIcons } from '@clr/icons';
import '@clr/icons/shapes/core-shapes';

import { AppComponent } from './app.component';

ClarityIcons.add({
  logo: `
    <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
    <path class="clr-i-outline" d="M16.17,25.86,10.81,20.5a1,1,0,0,1,1.41-1.41L16.17,23l8.64-8.64a1,
    1,0,0,1,1.41,1.41Z"/>
    <path class="clr-i-outline"
    d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,
    0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>
    <path class="clr-i-outline" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
    <path class="clr-i-outline" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
    <rect class="clr-i-outline" x="13" y="6" width="10" height="2"/>
    </svg>
  `
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
