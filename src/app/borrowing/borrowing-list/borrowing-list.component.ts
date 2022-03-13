import { Component, OnInit } from '@angular/core';
import {Borrowing} from "../../models/borrowing.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.css']
})
export class BorrowingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  borrowings : Borrowing[] = [];

}
