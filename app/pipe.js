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
require('rxjs/Rx');
var SortByNamePipe = (function () {
    function SortByNamePipe() {
    }
    //transform(items: any[], args: any[]): any {
    //if (!items || !items.length) { return; }
    // filter items array, items which match and return true will be kept, false will be filtered out
    // return items.filter(item => item.author.indexOf(args[0].author) !== -1);
    SortByNamePipe.prototype.transform = function (value, queryString) {
        if (value == null) {
            return null;
        }
        console.log(value);
        return value.filter(function (book) { return new RegExp(queryString).test(book.author); });
    };
    SortByNamePipe = __decorate([
        core_1.Pipe({
            name: 'sortByName',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SortByNamePipe);
    return SortByNamePipe;
}());
exports.SortByNamePipe = SortByNamePipe;
//# sourceMappingURL=pipe.js.map