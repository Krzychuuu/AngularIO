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
var EditBookComponent = (function () {
    function EditBookComponent(bookService) {
        this.bookService = bookService;
        this.title = 'Online library book list';
    }
    EditBookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    EditBookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    EditBookComponent.prototype.onSelect = function (book) { this.selectedBook = book; };
    EditBookComponent = __decorate([
        core_1.Component({
            selector: 'edit-book',
            template: "\n\t<h2>Click on the desired book to edit its data</h2>\n\t\t<table class=\"edit-view-table\">\n\t\t<tr>\n\t\t\t<td width=\"50%\">\n\n\t\t\t\t<ul class=\"book-list\">\n\t\t\t\t\t<li *ngFor=\"let book of books\" (click)=\"onSelect(book)\"\n\t\t\t\t\t\t[class.selected]=\"book === selectedBook\">\n\t\t\t\t\t\t<span class=\"book-list-element\"><b>\"{{book.title}}\"</b>, by: {{book.author}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</td>\n\t\t\t<td width=\"50%\">\n\n\t\t\t\t<my-book-detail [book]=\"selectedBook\"></my-book-detail>\n\n\t\t\t</td> \n\t\t</tr>\n\t\t</table>\n\t\n\t",
            directives: [book_detail_component_1.BookDetailComponent]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;
//# sourceMappingURL=edit-book.component.js.map