import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../models/book.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-formular',
  templateUrl: './book-formular.component.html',
  styleUrls: ['./book-formular.component.css']
})
export class BookFormularComponent {

  @Input()
  set book(data: Book) {
    if(data) {
      this.fillBookForm(data);
    }
  }

  @Output()
  addNewBook = new EventEmitter<Book>();

  @Output()
  updateNewBook = new EventEmitter<Book>();

  form: FormGroup;

  constructor() {
    this.createBookForm();
  }

  private createBookForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      authorFirstName: new FormControl(null),
      authorLastName: new FormControl(null),
      name: new FormControl(null),
      isbn: new FormControl(null),
      bookCount: new FormControl(null)
    });
  }

  private fillBookForm(book: Book): void {
    this.form.controls['id'].setValue(book.id);
    this.form.controls['authorFirstName'].setValue(book.authorFirstName);
    this.form.controls['authorLastName'].setValue(book.authorLastName);
    this.form.controls['bookCount'].setValue(book.bookCount);
    this.form.controls['isbn'].setValue(book.isbn);
    this.form.controls['name'].setValue(book.name);


  }

  public addBook(): void {
    this.addNewBook.emit(this.form.value);
    this.form.reset();
  }

  public updateBook(): void {
    this.updateNewBook.emit(this.form.value);
    this.form.reset();
  }

  public deleteBook(): void {
    this.book = undefined;
    this.form.reset();
  }

}
