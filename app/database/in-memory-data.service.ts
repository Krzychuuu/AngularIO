import { Book } from '../books/book';

export class InMemoryDataService {
	createDb() {
		let books = [

			{ id: 1, title: "Romeo and Juliet", author: "Shakespear" },
			{ id: 2, title: "Odysey", author: "Homer" },
			{ id: 3, title: "Cooking book", author: "Gordon Ramsay" },
			{ id: 4, title: "Illiad", author: "Homer" },
			{ id: 5, title: "Star Wars", author: "George Lucas" },
			{ id: 6, title: "Beuty and the beast", author: "Walt Disney" }
		
		];

		return {books};
	}
}