import { Component } from '@angular/core';

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
	<div *ngIf="selectedBook">
		<h2><b>Fast edition for:</b><br>[{{selectedBook.title}}], written by: {{selectedBook.author}}</h2>
		<div>
		    <label>Title: </label>
		    <input [(ngModel)]="selectedBook.title" placeholder="title"/>
		    <label>Author: </label>
		    <input [(ngModel)]="selectedBook.author" placeholder="author"/>
		</div>
	</div>

	`
})

export class AppComponent {
	title = 'Online library book list',
	public books = BOOKS;
	selectedBook: Book;
	onSelect(book: Book) { this.selectedBook = book; }

}

export class Book {
	name: string;
	author: string;
}

var BOOKS: Book[] = [
	{ "title": "Romeo and Juliet", "author": "Shakespear" },
	{ "title": "Odysey", "author": "Homer" },
	{ "title": "Cooking book", "author": "Gordon Ramsay" }
];