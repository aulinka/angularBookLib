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
  pridajBook = new EventEmitter<Book>();

  @Output()
  upravBook = new EventEmitter<Book>();

  form: FormGroup;

  constructor() {
    this.createBookForm();
  }

  private createBookForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null),
      available: new FormControl(null)
    });
  }

  private fillBookForm(book: Book): void {
    this.form.controls.id.setValue(book.id);
    this.form.controls.name.setValue(book.name);
    this.form.controls.author.setValue(book.author);
    this.form.controls.available.setValue(book.available);
  }

  public addBook(): void {
    this.pridajBook.emit({id: Math.random().toString(), name: this.form.value.name, author: this.form.value.author, available: this.form.value.available});
    this.form.reset();
  }

  public updateBook(): void {
    this.upravBook.emit(this.form.value);
    this.form.reset();
  }

  public deleteBook(): void {
    this.book = undefined;
    this.form.reset();
  }

}
