import { Component } from '@angular/core';
enum MENU{
  USER,
  BOOKS,
  BORROWINGS
}
interface Borrowing{
  id: number;
  book: string;
  user: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookLibrary';
  activeMenu: MENU = MENU.USER;
  borrowings : Borrowing[] = [];
  borrowing : Borrowing = {
    id: 0,
    book: '',
    user: ''
  }
  openWindow(m: MENU) {
    this.activeMenu = m;
  }
  addBorrowing(){
    let bo = {id: this.borrowing.id, book: this.borrowing.book, user: this.borrowing.user}
    this.borrowings.push(bo);
    //console.log(bo);
  }
}
