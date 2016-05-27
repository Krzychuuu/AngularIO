import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
	selector: 'my-books',

	template: `
	<h2>Full list of avaible books:</h2>
	<ul class="book-list">
		<li *ngFor="let book of books">
			<span class="book-list-element"><b>"{{book.title}}"</b>, by: {{book.author}}</span>
		</li>
	</ul>
	<hr>
	`
})

export class BooksComponent implements OnInit {
	books: Book[];
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
}


