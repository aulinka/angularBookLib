import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-zoznam',
  templateUrl: './user-zoznam.component.html',
  styleUrls: ['./user-zoznam.component.css']
})
export class UserZoznamComponent {

  @Input()
  users: User[] = [];

  @Output()
  updateNewUser: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  deleteNewUser: EventEmitter<User> = new EventEmitter<User>();

  updateUser(user: User): void {
    this.updateNewUser.emit(user);
  }

  deleteUser(user: User): void {
    this.deleteNewUser.emit(user);
  }
}
