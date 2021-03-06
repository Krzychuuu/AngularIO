import { Component } from '@angular/core';
import { BookService } from './books/book.service';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './books/edit-book.component';
import { BookDetailComponent } from './books/book-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WelcomePageComponent } from './welcome-page.component';
import { ContactComponent } from './contact.component';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'my-app',

    template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['WelcomePage']">Home</a>
    <a [routerLink]="['Books']">Book list</a>
    <a [routerLink]="['EditBook']">Edit book</a>
    <a [routerLink]="['Contact']">Contact</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
    `,

    directives: [ROUTER_DIRECTIVES, WelcomePageComponent],
    providers: [
        ROUTER_PROVIDERS,
        BookService
    ]
})

    @RouteConfig([
    { path: '/books', name: 'Books', component: BooksComponent },
    { path: '/welcome-page', name: 'WelcomePage', component: WelcomePageComponent, useAsDefault: true    },
    { path: '/edit-book', name: 'EditBook', component: EditBookComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/detail/:id', name: 'BookDetail', component: BookDetailComponent }
    ])

export class AppComponent {
    title = 'Online library book list';
}
