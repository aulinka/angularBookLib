import { Component, OnInit } from '@angular/core';
import {Borrowing} from "../../models/borrowing.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  borrowing : Borrowing = {
    id: 0,
    book: '',
    user: ''
  }
  addBorrowing(){
    let bo = {id: this.borrowing.id, book: this.borrowing.book, user: this.borrowing.user}
    //this.borrowings.push(bo);
    //console.log(bo);
  }

}
