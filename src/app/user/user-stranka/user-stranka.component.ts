import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-user-stranka',
  templateUrl: './user-stranka.component.html',
  styleUrls: ['./user-stranka.component.css']
})
export class UserStrankaComponent implements OnInit{

  users: User[] = [];

  updatingUser?: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  addUser(user: User): void {
    this.userService.createUser(user).subscribe(data => {
      this.refreshUser();
    });
  }

  updateUser(user: User): void {
    if (user.id !== undefined) {
      this.userService.updateUser(user.id, user).subscribe(data => {
        this.refreshUser();
      });
    }
  }

  updateFromList(userId: number): void {
    this.userService.getUser(userId).subscribe(data => {
      this.updatingUser = data;
    });
  }

  deleteFromList(userId: number): void {
    this.userService.deleteUser(userId).subscribe(data => {
      this.refreshUser();
    });
  }
}
