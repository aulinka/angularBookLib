import { Component } from '@angular/core';
import {Router} from '@angular/router';

enum MENU { USERS,
            BOOKS,
            BORROWINGS }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu = MENU;

  constructor(private router: Router) { }

  openWindow(m: MENU) {
    if (m === MENU.USERS) {
      this.router.navigate(['/user']);
    }
    if (m === MENU.BOOKS) {
      this.router.navigate(['/book']);
    }
    if (m === MENU.BORROWINGS) {
      this.router.navigate(['/borrowing']);
    }
  }

}
