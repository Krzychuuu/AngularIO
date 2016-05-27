import { Injectable } from '@angular/core';

import { BOOKS } from './mock-books';
import { Book } from ./book

@Injectable()
export class BookService {
	getBooks() {
		return Promise.resolve(BOOKS);
  	};
}