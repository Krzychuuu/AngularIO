import { Component } from '@angular/core';
import { BookService } from './book.service';
import { BooksComponent } from './books.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WelcomePageComponent } from './welcome-page.component';


@Component({
  selector: 'my-app',

  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['WelcomePage']">Home</a>
  <a [routerLink]="['Books']">Books</a>
  </nav>
  <router-outlet></router-outlet>
  `,

  directives: [ROUTER_DIRECTIVES, WelcomePageComponent],
  providers: [
     ROUTER_PROVIDERS,
     BookService
  ]
})


@RouteConfig([{
  path: '/books',
  name: 'Books',
  component: BooksComponent
},
{
  path: '/welcome-page',
  name: 'WelcomePage',
  component: WelcomePageComponent,
  useAsDefault: true
}])

export class AppComponent {
  title = 'Online library book list';
}

