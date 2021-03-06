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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = '../database/books';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks()
            .then(function (books) { return books.filter(function (book) { return book.id === id; })[0]; });
    };
    BookService.prototype.save = function (book) {
        if (book.id) {
            return this.put(book);
        }
        return this.post(book);
    };
    BookService.prototype.delete = function (book) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.booksUrl + "/" + book.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    BookService.prototype.post = function (book) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.booksUrl, JSON.stringify(book), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BookService.prototype.put = function (book) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.booksUrl + "/" + book.id;
        return this.http
            .put(url, JSON.stringify(book), { headers: headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map