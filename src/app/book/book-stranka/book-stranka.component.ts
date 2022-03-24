import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book.model";
import {Router} from "@angular/router";
import {BookServiceService} from "../../../book-service.service";

@Component({
  selector: 'app-book-stranka',
  templateUrl: './book-stranka.component.html',
  styleUrls: ['./book-stranka.component.css']
})
export class BookStrankaComponent implements OnInit {

  books: Book[] = [];

  updatingBook?: Book;

  constructor(private router: Router, private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log('prišlo:', data);
      this.books = data;
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  addBook(book: Book): void {
    this.bookService.createBook(book).subscribe(data => {
      console.log('prišlo:', data);
      this.refreshBooks();
    });
  }

  updateBook(book: Book): void {
    if (book.id !== undefined) {
      this.bookService.updateBook(book.id, book).subscribe(data => {
        console.log('prišlo:', data);
        this.refreshBooks();
      });
    }
  }

  updateFromList(bookId: number): void {
    this.bookService.getBook(bookId).subscribe(data => {
      console.log('prišlo:', data);
      this.updatingBook = data;
    });
  }

  deleteFromList(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(data => {
      this.refreshBooks();
    });
  }

}
