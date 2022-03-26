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
  updateNewUser: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  deleteNewUser: EventEmitter<number> = new EventEmitter<number>();

  updateUser(userId: number): void {
    this.updateNewUser.emit(userId);
  }

  deleteUser(userId: number): void {
    this.deleteNewUser.emit(userId);
  }
}
