import { Component, OnInit } from '@angular/core';
import {Borrowing} from "../../models/borrowing.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent implements OnInit{

  ngOnInit(): void {
  }

  borrowings : Borrowing[] = [];
  borrowingEdited: Borrowing;

  constructor(private router: Router) { }

  public goBack() : void{
    this.router.navigate(['']);
  }
  public addBorrowing(borrowing : Borrowing) : void{
    this.borrowings.push(borrowing);
  }
  public editBorrowing(borrowing : Borrowing) : void{
    const index = this.borrowings.findIndex(b => b.id === borrowing.id);
    if(index !== -1){
      this.borrowings[index] = borrowing;
    }
  }
  public editFromList(borrowing : Borrowing) : void{
    this.borrowingEdited = borrowing;
  }
  public deleteFromList(borrowing : Borrowing) : void{
    const index = this.borrowings.findIndex(b => b.id === borrowing.id);
    if(index !== -1){
      this.borrowings.splice(index,1);
    }
  }
}
