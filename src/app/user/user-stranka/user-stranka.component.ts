import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {UserServiceService} from "../../../user-service.service";

@Component({
  selector: 'app-user-stranka',
  templateUrl: './user-stranka.component.html',
  styleUrls: ['./user-stranka.component.css']
})
export class UserStrankaComponent implements OnInit{

  users: User[] = [];

  updatingUser?: User;

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser(): void {
    this.userService.getUsers().subscribe(data => {
      console.log('prislo:', data);
      this.users = [];
      for (const d of data) {

        this.users.push({ id: d.id, name: d.name, contact: d.name});
      }
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  addUser(user: User): void {
    //this.users.push(user);
    this.userService.createUser(user).subscribe(data => {
      console.log('prislo:', data);
      this.refreshUser();
    });
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
