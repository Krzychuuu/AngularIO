import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { AddDetailComponent } from './add-book.component';

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
						<button class="delete-button" (click)="delete(book, $event)">Remove</button>
						<span class="book-list-element"><b>"{{book.title}}"</b>, by: {{book.author}}</span>
					</li>
				</ul>
				<button (click)="addBook()">New</button>
				<button (click)="getBooks()">Refresh list</button>

			</td>
			<td width="50%">
				<div *ngIf="addingBook">
					<h2><b>"Fill new book's info":</b></h2>
					<add-book-detail [book]="selectedBook"></add-book-detail>
				</div>
				<div *ngIf="edittingBook">
					<h2><b>Fast edition for:</b></h2>
					<my-book-detail [book]="selectedBook"></my-book-detail> 
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [BookDetailComponent, AddDetailComponent]
})

export class EditBookComponent implements OnInit {
	@Input() message: String;
	books: Book[];
	selectedBook: Book;
	addingBook = false;
	edittingBook = false;
	error: any;
	constructor(private bookService: BookService) { }
	getBooks() {
		this.bookService.getBooks().then(books => this.books = books);
	}
	ngOnInit() {
		this.getBooks();
	}
	addBook() {
		this.edittingBook = false;
	    this.addingBook = true;
	    this.selectedBook = new Book();
	}
	close(message) {
		this.getBooks();
	}
	delete(book: Book, event: any) {
		this.bookService
		    .delete(book)
		    .then(res => {
		      this.books = this.books.filter(b => b !== book);
		      if (this.selectedBook === book) { this.selectedBook = null; }
		    })
		    .catch(error => this.error = error);
	}
	onSelect(book: Book) { 
		this.selectedBook = book;
		this.addingBook = false;
		this.edittingBook = true;
	}
}

