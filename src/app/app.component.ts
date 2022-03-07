import { Component } from '@angular/core';
import {Router} from "@angular/router";
enum MENU{
  USER,
  BOOKS,
  BORROWINGS
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BookLibrary';
  activeMenu: MENU = MENU.USER;

  constructor(private router: Router) {
  }

  openWindow(m: MENU) {
    this.activeMenu = m;
    if(m == 0) {
      this.router.navigate(['/user']);
    }
    if(m == 1) {
      this.router.navigate(['/book']);
    }
    if(m == 2){
      this.router.navigate(['/borrowing']);
    }
  }
}
