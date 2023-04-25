import { FormsModule, NgForm } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Bok } from '../model/bok';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  books: Bok[] = [];

  constructor(
    private bookService: BookService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }

  saveNew(newBook: NgForm) {
    const bok = newBook.value as Bok;
    if(this.books.length > 0) {
      let tempBok = this.books.slice(-1);
      bok.id = tempBok[0].id + 1;
      this.bookService.addBook(bok)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }
}
