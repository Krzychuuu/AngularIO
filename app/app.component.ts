import { Component } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { OnInit } from '@angular/core';

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
	directives: [BookDetailComponent],
	providers: [BookService]
})

export class AppComponent implements OnInit {
	title = 'Online library book list';
	books: Book[];
	selectedBook: Book;
	constructor(private bookService: bookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
	onSelect(book: Book) { this.selectedBook = book; }
}


