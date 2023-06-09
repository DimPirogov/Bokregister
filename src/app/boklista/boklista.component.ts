import { Component } from '@angular/core';

import { Bok } from '../model/bok';
import { BookService } from '../book.service';

@Component({
  selector: 'app-boklista',
  templateUrl: './boklista.component.html',
  styleUrls: ['./boklista.component.css']
})
export class BoklistaComponent {
  books: Bok[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }

  delete(id: number) {
    this.books = this.books.filter(dbBook => dbBook.id !== id);
    this.bookService.deleteBook(id).subscribe();
  }

}
