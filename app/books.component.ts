import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { SortByNamePipe } from './pipe';

@Component({
	selector: 'my-books',

	template: `
	<h2>Full list of avaible books:</h2>
	<label>Search by author:  </label><input type='text' [(ngModel)]="filterValue" value="Homer">
	<ul class="book-list">
		<li *ngFor="let book of books; let i=index">
			<span class="book-list-element">{{i + 1}} : <b>"{{book.title}}"</b>, by: {{book.author}}</span>
		</li>
	</ul>
	<hr>
	`,
	pipes: [SortByNamePipe]
})
/*<li *ngFor="let book of books | sortByName:filterValue; let i=index">*/

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


