import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Borrowing} from "../../models/borrowing.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.css']
})
export class BorrowingListComponent{

  @Input()
  borrowings : Borrowing[] = [];

  @Output()
  editBorrowing : EventEmitter<Borrowing> = new EventEmitter<Borrowing>();

  @Output()
  deleteBorrowing : EventEmitter<number> = new EventEmitter<number>();

  public edit(borrowing : Borrowing): void{
    this.editBorrowing.emit(borrowing);
  }
  public delete(borrowing : Borrowing): void{
    this.deleteBorrowing.emit(borrowing.id);
  }
}
