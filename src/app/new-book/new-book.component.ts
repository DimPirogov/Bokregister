import { FormsModule, NgForm } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { BOOKS } from '../mock-books';

import { Bok } from '../model/bok';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  
  books = BOOKS;

  saveNew(newBook: NgForm) {
    const bok = newBook.value as Bok;
    bok.id = Date.now();
    this.books = [...this.books, bok];
    console.log(this.books);
  }
}
