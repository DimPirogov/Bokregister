import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Bok } from '../model/bok';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  bok: Bok | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {};

  ngOnInit(): void {
    this.getBook();
  };

  getBook() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
      .subscribe(bok => this.bok = bok);
  };

  save(): void {
    if(this.bok) {
      this.bookService.updateBook(this.bok)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  };

}
