import { Component } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';

@Component({
	selector: 'my-app',

	template: `
	<h1>{{title}}</h1>
	<h2>Book List:</h2>
	<ul class="book-list">
		<li *ngFor="let book of books" (click)="onSelect(book)"
			[class.selected]="book === selectedBook">
			<span class="book-list-element"><b>"{{book.title}}"</b>, by: {{book.author}}</span>
		</li>
	</ul>
	<hr>
	<my-book-detail [book]="selectedBook"></my-book-detail>
	`,
	directives: [BookDetailComponent]
})

export class AppComponent {
	title = 'Online library book list';
	books = BOOKS;
	selectedBook: Book;
	onSelect(book: Book) { this.selectedBook = book; }
}

var BOOKS: Book[] = [
	{ "title": "Romeo and Juliet", "author": "Shakespear" },
	{ "title": "Odysey", "author": "Homer" },
	{ "title": "Cooking book", "author": "Gordon Ramsay" }
];