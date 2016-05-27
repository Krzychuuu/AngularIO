import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-book-detail',
	template: `
	<div *ngIf="book">
		<h2><b>Fast edition for:</b><br>[{{book.title}}], written by: {{book.author}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="book.title" placeholder="title" required/>
		    <label>Author: </label>
		    <input [(ngModel)]="book.author" placeholder="author" required/>
        <br>
        <button (click)="save()">Add (only if new book)</button>
		</div>
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
  ngOnInit() {
    if (this.routeParams.get('title') !== null) {
      let title = +this.routeParams.get('title');
      this.navigated = true;
      this.bookService.getBook('title')
          .then(book => this.book = book);
    } else {
      this.navigated = false;
      this.book = new Book();
    }
  }
  save() {
    this.bookService
        .save(this.book)
        .then(book => {
          this.book = book;
          this.goBack(book);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedBook: Book = null) {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }

}