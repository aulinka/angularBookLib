import { Component } from '@angular/core';
import {Router} from "@angular/router";
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
interface Book{
  id: number;
  name: string;
  author: string;
  available: number;
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
  books : Book[] = [];
  book: Book = {
    id: 0,
    name: '',
    author: '',
    available: 0
  }


  constructor(private router:Router) {
  }
  openWindow(m: MENU) {
    this.activeMenu = m;
    if(m == 2){
      this.router.navigate(['/borrowing']);
    }
  }
  addUser(){
    let u2 = {id: this.user.id, name: this.user.name, contact: this.user.contact}
    this.users.push(u2);
  }
  addBook(){
    let b2 = {id: this.book.id, name: this.book.name, author: this.book.author, available: this.book.available}
    this.books.push(b2);
  }

}
