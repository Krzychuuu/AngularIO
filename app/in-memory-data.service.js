"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { "title": "Romeo and Juliet", "author": "Shakespear" },
            { "title": "Odysey", "author": "Homer" },
            { "title": "Cooking book", "author": "Gordon Ramsay" }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map