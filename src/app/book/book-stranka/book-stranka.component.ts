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
      this.books = [];
      for (const d of data) {
        this.books.push({ id: d.id, name: d.name, author: d.author, available: d.available});
      }
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
