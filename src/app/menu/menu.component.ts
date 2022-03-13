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
      this.router.navigate(['/users']);
    }
  }

}
