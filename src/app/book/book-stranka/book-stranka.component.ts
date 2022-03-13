import { Component } from '@angular/core';
import {Book} from "../../models/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-stranka',
  templateUrl: './book-stranka.component.html',
  styleUrls: ['./book-stranka.component.css']
})
export class BookStrankaComponent {

  books: Book[] = [];

  updatingBook?: Book;

  constructor(private router: Router) {
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if(index !== -1) {
      this.books[index] = book;
    }
  }

  updateFromList(book: Book): void {
    this.updatingBook = book;
  }

  deleteFromList(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if(index !== -1) {
      this.books.splice(index, 1);
    }
  }

}
