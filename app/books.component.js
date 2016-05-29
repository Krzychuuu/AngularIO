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
var pipe_1 = require('./pipe');
require('rxjs/Rx');
var core_2 = require('@angular/core');
var BooksComponent = (function () {
    /* constructor(http: Http) { http.get('books.json').map(res => res.json())
      .subscribe(books => this.books = books); */
    //constructor(private bookService: BookService) { }
    /* getBooks() {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit() {
        this.getBooks();
    } */
    function BooksComponent(http) {
        var _this = this;
        this.http = http;
        this.getData = function () {
            return _this.http.get('books.json').map(function (res) { return res.json(); }).subscribe(function (books) { return _this.books = books; });
        };
        this.http = http;
    }
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'my-books',
            template: "\n\t<h2>Full list of avaible books:</h2>\n\t<label>Search by author:  </label><input type='text' [(ngModel)]=\"filterValue\" value=\"Homer\">\n\t<ul class=\"book-list\">\n\t\t<li *ngFor=\"let book of books | async | sortByName:filterValue; let i=index\">\n\t\t\t<span class=\"book-list-element\">{{i + 1}} : <b>\"{{book.title}}\"</b>, by: {{book.author}}</span>\n\t\t</li>\n\t</ul>\n\t<hr>\n\t",
            pipes: [pipe_1.SortByNamePipe]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map