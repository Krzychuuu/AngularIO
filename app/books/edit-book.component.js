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
var router_deprecated_1 = require('@angular/router-deprecated');
var EditBookComponent = (function () {
    function EditBookComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
        this.addingBook = false;
    }
    EditBookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    EditBookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    EditBookComponent.prototype.addBook = function () {
        this.addingBook = true;
        this.selectedBook = null;
    };
    EditBookComponent.prototype.close = function (savedBook) {
        this.addingBook = false;
        if (savedBook) {
            this.getBooks();
        }
    };
    EditBookComponent.prototype.delete = function (book, event) {
        var _this = this;
        this.bookService
            .delete(book)
            .then(function (res) {
            _this.books = _this.books.filter(function (b) { return b !== book; });
            if (_this.selectedBook === book) {
                _this.selectedBook = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EditBookComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.addingBook = false;
    };
    EditBookComponent.prototype.gotoDetail = function () {
        this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
    };
    EditBookComponent = __decorate([
        core_1.Component({
            selector: 'edit-book',
            template: "\n\t<h2>Click on the desired book to edit its data</h2>\n\t\t<table class=\"edit-view-table\">\n\t\t<tr>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<ul class=\"book-list\">\n\t\t\t\t\t<li *ngFor=\"let book of books\" (click)=\"onSelect(book)\"\n\t\t\t\t\t\t[class.selected]=\"book === selectedBook\">\n\t\t\t\t\t\t<button class=\"delete-button\" (click)=\"delete(book, $event)\">Remove</button>\n\t\t\t\t\t\t<span class=\"book-list-element\"><b>\"{{book.title}}\"</b>, by: {{book.author}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<button (click)=\"addBook()\">New</button>\n\t\t\t\t<button (click)=\"getBooks()\">Refresh list</button>\n\n\t\t\t</td>\n\t\t\t<td width=\"50%\">\n\t\t\t\t<div *ngIf=\"addingBook\">\n\t\t\t\t  <my-book-detail (close)=\"close($event)\"></my-book-detail>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"selectedBook\">\n\t\t\t\t  <h2>\n\t\t\t\t    Title: {{selectedBook.title}}<br>\n\t\t\t\t    Author: {{selectedBook.author}}\n\t\t\t\t  </h2>\n\t\t\t\t  <button (click)=\"gotoDetail()\">Edit</button>\n\t\t\t\t</div>\t\t\t\n\t\t\t</td> \n\t\t</tr>\n\t\t</table>\n\t",
            directives: [book_detail_component_1.BookDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, book_service_1.BookService])
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;
//# sourceMappingURL=edit-book.component.js.map