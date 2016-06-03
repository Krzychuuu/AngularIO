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
var book_1 = require('./book');
var book_service_1 = require('./book.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, routeParams) {
        this.bookService = bookService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    BookDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService
            .save(this.book)
            .then(function (book) {
            _this.book = book;
            _this.goBack(book);
        })
            .catch(function (error) { return _this.error = error; });
    };
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.bookService.getBook(id)
                .then(function (book) { return _this.book = book; });
        }
        else {
            this.navigated = false;
            this.book = new book_1.Book();
        }
    };
    BookDetailComponent.prototype.goBack = function (savedBook) {
        if (savedBook === void 0) { savedBook = null; }
        this.close.emit(savedBook);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookDetailComponent.prototype, "book", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookDetailComponent.prototype, "close", void 0);
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-book-detail',
            template: "\n\t<div *ngIf=\"book\">\n  <h3>You are adding:</h3>\n\t\t<h2>[{{book.title}}], written by: {{book.author}}</h2>\n\t\t<div>\n\t\t    <label>Title: </label>\n\t\t    <input [(ngModel)]=\"book.title\" placeholder=\"title\" required/>\n\t\t    <label>Author: </label>\n\t\t    <input [(ngModel)]=\"book.author\" placeholder=\"author\" required/>\n\t\t</div><br>\n  <button (click)=\"goBack()\">Cancel</button>\n  <button (click)=\"save()\">Confirm</button>\n\t</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_deprecated_1.RouteParams])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map