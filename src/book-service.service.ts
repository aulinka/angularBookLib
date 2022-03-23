import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book, BookZoznam} from './app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookZoznam[]> {
    return this.http.get<BookZoznam[]>(`${this.apiUrl}`);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, {name: book.name, author: book.author, available: book.available});
  }

}