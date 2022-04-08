import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book.model";
import {Router} from "@angular/router";
import {BookService} from "../../../book.service";

@Component({
  selector: 'app-book-stranka',
  templateUrl: './book-stranka.component.html',
  styleUrls: ['./book-stranka.component.css']
})
export class BookStrankaComponent implements OnInit {

  books: Book[] = [];

  updatingBook?: Book;

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  addBook(book: Book): void {
    this.bookService.createBook(book).subscribe(data => {
      this.refreshBooks();
    });
  }

  updateBook(book: Book): void {
    if (book.id !== undefined) {
      this.bookService.updateBook(book.id, book).subscribe(data => {
        this.refreshBooks();
      });
    }
  }

  updateFromList(bookId: number): void {
    this.bookService.getBook(bookId).subscribe(data => {
      this.updatingBook = data;
    });
  }

  deleteFromList(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(data => {
      this.refreshBooks();
    });
  }

}
