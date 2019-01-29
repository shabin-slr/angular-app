import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees Portal';
  isLoggedIn = false;
}
