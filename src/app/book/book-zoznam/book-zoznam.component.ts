import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-book-zoznam',
  templateUrl: './book-zoznam.component.html',
  styleUrls: ['./book-zoznam.component.css']
})
export class BookZoznamComponent {

  @Input()
  books: Book[] = [];

  @Output()
  updateNewBook: EventEmitter<Book> = new EventEmitter<Book>();

  @Output()
  deleteNewBook: EventEmitter<Book> = new EventEmitter<Book>();

  updateBook(book: Book): void {
    this.updateNewBook.emit(book);
  }

  deleteBook(book: Book): void {
    this.deleteNewBook.emit(book);
  }

}
