import { Component } from '@angular/core';
import { BookService } from './book.service';
import { BooksComponent } from './books.component';


@Component({
  selector: 'my-app',

  template: `
  <h1>{{title}}</h1>
  <my-books></my-books>
  `,
  
  directives: [BooksComponent],
  providers: [
    BookService
  ]
})
export class AppComponent {
  title = 'Online library book list';
}