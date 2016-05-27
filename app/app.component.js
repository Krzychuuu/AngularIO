"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_service_1 = require('./book.service');
var books_component_1 = require('./books.component');
var edit_book_component_1 = require('./edit-book.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var welcome_page_component_1 = require('./welcome-page.component');
var contact_component_1 = require('./contact.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Online library book list';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n  <a [routerLink]=\"['WelcomePage']\">Home</a>\n  <a [routerLink]=\"['Books']\">Book list</a>\n  <a [routerLink]=\"['EditBook']\">Edit book</a>\n  <a [routerLink]=\"['Contact']\">Contact</a>\n  </nav>\n  <hr>\n  <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, welcome_page_component_1.WelcomePageComponent],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                book_service_1.BookService
            ]
        }),
        router_deprecated_1.RouteConfig([{
                path: '/books',
                name: 'Books',
                component: books_component_1.BooksComponent
            },
            {
                path: '/welcome-page',
                name: 'WelcomePage',
                component: welcome_page_component_1.WelcomePageComponent,
                useAsDefault: true
            },
            {
                path: '/edit-book',
                name: 'EditBook',
                component: edit_book_component_1.EditBookComponent
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            }]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map