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
						<button class="delete-button" (click)="delete(book, $event)">Remove</button>
					</li>
				</ul>
				<button (click)="addBook()">New</button>
				
				<div *ngIf="selectedHero">
				  <h2>
				    {{selectedHero.name | uppercase}} is my hero
				  </h2>
				  <button (click)="gotoDetail()">View Details</button>
				</div>

			</td>
			<td width="50%">
				<div *ngIf="addingBook">
				  <my-book-detail (close)="close($event)"></my-book-detail>
				</div>
				<my-book-detail [book]="selectedBook"></my-book-detail>
				<button (click)="save()">Save</button>

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
	addingBook = false;
	error: any;
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
	addBook() {
	    this.addingBook = true;
	    this.selectedBook = null;
	}
	close(savedBook: Book) {
		this.addingBook = false;
		if (savedBook) { this.getBooks(); }
	}
	delete(book: Book, event: any) {
		event.stopPropagation();
		this.bookService
		    .delete(book)
		    .then(res => {
		      this.books = this.books.filter(b => b !== book);
		      if (this.selectedBook === book) { this.selectedBook = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(book: Book) { this.selectedBook = book; }
}


