import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { AddDetailComponent } from './add-book.component';
import { Router } from '@angular/router-deprecated';

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
				  <my-book-detail (close)="close($event)"></my-book-detail>
				</div>

				<div *ngIf="selectedBook">
				  <h2>
				    Title: {{selectedBook.title}}<br>
				    Author: {{selectedBook.author}}
				  </h2>
				  <button (click)="gotoDetail()">Edit</button>
				</div>			
			</td> 
		</tr>
		</table>
	`,

	directives: [BookDetailComponent]
})

export class EditBookComponent implements OnInit {
	books: Book[];
	selectedBook: Book;
	addingBook = false;
	error: any;

	constructor(private router: Router, private bookService: BookService) { }
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
	}
	gotoDetail() {
    	this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
	}
}


