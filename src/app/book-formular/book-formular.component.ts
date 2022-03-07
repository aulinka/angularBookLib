import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-book-formular',
  templateUrl: './book-formular.component.html',
  styleUrls: ['./book-formular.component.css']
})
export class BookFormularComponent {

  book: Book = {
    id: 0,
    name: '',
    author: '',
    available: 0
  }

  addBook() {
    let b = {id: this.book.id, name: this.book.name, author: this.book.author, available: this.book.available}
  }

}
