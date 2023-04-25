import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bok } from './model/bok';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { };

  getBooks() {
    return this.http.get<Bok[]>(this.URL + '/books')
  }

}
