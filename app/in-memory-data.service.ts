import { Book } from './book';

export class InMemoryDataService {
  createDb() {
    let books = [

	{ "title": "Romeo and Juliet", "author": "Shakespear" },
	{ "title": "Odysey", "author": "Homer" },
	{ "title": "Cooking book", "author": "Gordon Ramsay" }
];
return {books};
}
}