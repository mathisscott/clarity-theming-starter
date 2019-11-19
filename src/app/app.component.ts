import { Component } from '@angular/core';

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
}
