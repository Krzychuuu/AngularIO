import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';

@Component({
	selector: 'edit-book',

	template: `
	<h2>Click on the desired book to edit its data</h2>
		<table class="edit-view-table">
		<tr>
			<td width="50%">

				<ul class="book-list">
					<li *ngFor="let book of books" (click)="onSelect(book)"
						[class.selected]="book === selectedBook">
						<span class="book-list-element"><b>"{{book.title}}"</b>, by: {{book.author}}</span>
					</li>
				</ul>

			</td>
			<td width="50%">

				<my-book-detail [book]="selectedBook"></my-book-detail>

			</td> 
		</tr>
		</table>
	
	`,
	directives: [BookDetailComponent]
})

export class EditBookComponent implements OnInit {
	title = 'Online library book list';
	books: Book[];
	selectedBook: Book;
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
	onSelect(book: Book) { this.selectedBook = book; }
}


