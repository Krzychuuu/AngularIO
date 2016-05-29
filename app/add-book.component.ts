import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service'
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'add-book-detail',
	template: `
	<div *ngIf="book">
    <h2>[{{book.title}}], written by: {{book.author}}</h2>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="book.title" placeholder="title" required/>
        <label>Author: </label>
        <input [(ngModel)]="book.author" placeholder="author" required/>
        <br><button (click)="save()">CONFIRM</button>
      </div>
	</div>

	`
})

export class AddDetailComponent {
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
          getBooks();
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
}