import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

	template: `
	<h1>{{title}}</h1>
	<h2>First book:</h2>
	<div>"{{book.title}}", by: {{book.author}}</div>
	`

})


export class AppComponent {
	title = 'Online library book list'
	book: Book = {
		title: 'Odysey',
		author: 'Homer'
	};
}

export class Book {
	name: string;
	author: string;
}

