import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-stranka',
  templateUrl: './user-stranka.component.html',
  styleUrls: ['./user-stranka.component.css']
})
export class UserStrankaComponent {

  users: User[] = [];

  updatingUser?: User;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['']);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(userArray => userArray.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  updateFromList(user: User): void {
    this.updatingUser = user;
  }

  deleteFromList(user: User): void {
    const index = this.users.findIndex(userArray => userArray.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
