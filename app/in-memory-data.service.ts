import { Book } from './book';

export class InMemoryDataService {
  createDb() {
    let books = [

	{ "title": "Romeo and Juliet", "author": "Shakespear" },
	{ "title": "Odysey", "author": "Homer" },
	{ "title": "Cooking book", "author": "Gordon Ramsay" },
	{ "title": "Illiad", "author": "Homer" },
	{ "title": "Star Wars", "author": "George Lucas" },
	{ "title": "Beuty and the beast", "author": "Walt Disney" }
];
return {books};
}
}