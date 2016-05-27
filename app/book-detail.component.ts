import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
	selector: 'my-book-detail',
	template: `
	<div *ngIf="book">
		<h2><b>Fast edition for:</b><br>[{{book.title}}], written by: {{book.author}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="book.title" placeholder="title"/>
		    <label>Author: </label>
		    <input [(ngModel)]="book.author" placeholder="author"/>
		</div>
	</div>
	`
})

export class BookDetailComponent {
  @Input() 
  book: Book;
}