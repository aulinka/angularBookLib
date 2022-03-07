import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-book-zoznam',
  templateUrl: './book-zoznam.component.html',
  styleUrls: ['./book-zoznam.component.css']
})
export class BookZoznamComponent {

  books: Book[] = [];

  constructor() { }

}
