import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bok } from './model/bok';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Bok [] = [];

  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.getBooks();
  };

  getBooks() {
    return this.http.get<Bok[]>(this.URL + '/books')
  }

  getBook(id: number): Observable<Bok> {
    const url = `${this.URL}/books/${id}`;
    return this.http.get<Bok>(url)
  }

  updateBook(bok: Bok){
    return this.http.patch<Bok>(`${this.URL}/books/${bok.id}`, bok)
  }

  addBook(newBook: Bok) {
    return this.http.post<Bok>(`${this.URL}/books/`, newBook)
  }

  deleteBook(id: number) {
    const url = `${this.URL}/books/${id}`;
    return this.http.delete<Bok>(url);
  }

}
