import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

	template: `
	<h1>{{title}}</h1>
	<h2>Book List:</h2>
	<ul class="book-list">
		<li *ngFor="let book of books">
			<span class="book-list-element">"{{book.title}}", by: {{book.author}}</span>
		</li>
	</ul>
	`
})

export class AppComponent {
	title = 'Online library book list',
	public books = BOOKS;
}

export class Book {
	name: string;
	author: string;
}

	{ "title": "Romeo and Juliet", "author": "Shakespear" },
	{ "title": "Odysey", "author": "Homer" },
	{ "title": "Cooking book", "author": "Gordon Ramsay" }
];