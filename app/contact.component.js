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
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: "\n\t<form action=\"MAILTO:someone@example.com\" method=\"post\" enctype=\"text/plain\">\n\tName:<br>\n\t<input type=\"text\" name=\"name\" value=\"your name\"><br>\n\tE-mail:<br>\n\t<input type=\"text\" name=\"mail\" value=\"your email\"><br>\n\tComment:<br>\n\t<input type=\"text\" name=\"comment\" value=\"your comment\" size=\"50\"><br><br>\n\t<input type=\"submit\" value=\"Send\">\n\t<input type=\"reset\" value=\"Reset\">\n\t</form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map