"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { "title": "Romeo and Juliet", "author": "Shakespear" },
            { "title": "Odysey", "author": "Homer" },
            { "title": "Cooking book", "author": "Gordon Ramsay" },
            { "title": "Illiad", "author": "Homer" },
            { "title": "Star Wars", "author": "George Lucas" },
            { "title": "Beuty and the beast", "author": "Walt Disney" }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map