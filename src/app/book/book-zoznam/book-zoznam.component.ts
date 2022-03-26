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
  updateNewBook: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  deleteNewBook: EventEmitter<number> = new EventEmitter<number>();

  updateBook(bookId: number): void {
    this.updateNewBook.emit(bookId);
  }

  deleteBook(bookId: number): void {
    this.deleteNewBook.emit(bookId);
  }
}
