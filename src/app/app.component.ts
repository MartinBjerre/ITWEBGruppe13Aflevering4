import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>\n' +
  '<nav>\n' +
    '<a routerLink="/user" routerLinkActive="active">home</a>\n' +
  '</nav>\n' +
  '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = 'FitnessAp';
}


