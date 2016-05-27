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
var book_detail_component_1 = require('./book-detail.component');
var book_service_1 = require('./book.service');
var BooksComponent = (function () {
    function BooksComponent(bookService) {
        this.bookService = bookService;
        this.title = 'Online library book list';
    }
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent.prototype.onSelect = function (book) { this.selectedBook = book; };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'my-books',
            template: "\n\t<h2>Book List:</h2>\n\t<ul class=\"book-list\">\n\t\t<li *ngFor=\"let book of books\" (click)=\"onSelect(book)\"\n\t\t\t[class.selected]=\"book === selectedBook\">\n\t\t\t<span class=\"book-list-element\"><b>\"{{book.title}}\"</b>, by: {{book.author}}</span>\n\t\t</li>\n\t</ul>\n\t<hr>\n\t<my-book-detail [book]=\"selectedBook\"></my-book-detail>\n\t",
            directives: [book_detail_component_1.BookDetailComponent]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map