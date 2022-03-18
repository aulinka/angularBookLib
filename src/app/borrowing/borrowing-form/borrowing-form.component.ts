import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Borrowing} from "../../models/borrowing.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

  form:FormGroup;

  @Input()
  set borrowing(data: Borrowing | undefined){
    if(data){
      this.fillForm(data);
    }
  }
  @Output()
  addBorrowing = new EventEmitter<Borrowing>();
  @Output()
  editBorrowing = new EventEmitter<Borrowing>();

  constructor() {
    this.createForm();
  }

  private createForm(): void{
    this.form= new FormGroup({
        id: new FormControl(null),
        book: new FormControl(null),
        user: new FormControl(null)
      });
  }
  private fillForm(borrowing: Borrowing): void{
    this.form.controls['id'].setValue(borrowing.id);
    this.form.controls['book'].setValue(borrowing.book);
    this.form.controls['user'].setValue(borrowing.user);
  }

  public add(){
    this.addBorrowing.emit({id: (Math.floor(Math.random()*10)).toString(), book: this.form.value.book, user: this.form.value.user});
    this.form.reset();
  }
  public edit(){
    this.editBorrowing.emit(this.form.value);
    this.form.reset();
  }
  public discard(){
    this.borrowing = undefined;
    this.form.reset();
  }

}
