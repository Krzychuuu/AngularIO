import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-book-detail',
	template: `
	<div *ngIf="book">
  <h3>You are adding:</h3>
		<h2>[{{book.title}}], written by: {{book.author}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="book.title" placeholder="title" required/>
		    <label>Author: </label>
		    <input [(ngModel)]="book.author" placeholder="author" required/>
		</div><br>
  <button (click)="goBack()">Cancel</button>
  <button (click)="save()">Confirm</button>
	</div>

	`
})

export class BookDetailComponent {
  @Input() book: Book;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private bookService: BookService,
    private routeParams: RouteParams) {
  }
  save() {
    this.bookService
        .save(this.book)
        .then(book => {
          this.book = book;
          this.goBack(book);
        })
        .catch(error => this.error = error);
  }
  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.bookService.getBook(id)
          .then(book => this.book = book);
    } else {
      this.navigated = false;
      this.book = new Book();
    }
  }
  goBack(savedBook: Book = null) {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }
}