import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  template: `
  <h1>{{ title }}</h1><br>
  <app-parent-component></app-parent-component>
  `,
  styles: []
})
export class AppComponent {
  title = 'MyApp';
}
