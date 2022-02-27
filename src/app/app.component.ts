import { Component } from '@angular/core';
enum MENU{
  USER,
  BOOKS,
  BORROWINGS
}
interface User{
  id: number;
  name: string;
  contact: string;
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
  users : User[] = [];
  user : User = {
    id: 0,
    name: '',
    contact: ''
  }
  borrowings : Borrowing[] = [];
  borrowing : Borrowing = {
    id: 0,
    book: '',
    user: ''
  }
  openWindow(m: MENU) {
    this.activeMenu = m;
  }
  addUser(){
    let u2 = {id: this.user.id, name: this.user.name, contact: this.user.contact}
    this.users.push(u2);
  }
  addBorrowing(){
    let bo = {id: this.borrowing.id, book: this.borrowing.book, user: this.borrowing.user}
    this.borrowings.push(bo);
    //console.log(bo);
  }
}
