import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-formular',
  templateUrl: './user-formular.component.html',
  styleUrls: ['./user-formular.component.css']
})
export class UserFormularComponent {

  @Input()
  set user(data: User) {
    if (data) {
      this.fillUserForm(data);
    }
  }

  @Output()
  addNewUser = new EventEmitter<User>();

  @Output()
  updateNewUser = new EventEmitter<User>();

  form: FormGroup;

  constructor() {
    this.createUserForm();
  }

  private createUserForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null)
    });
  }

  private fillUserForm(user: User): void {
    this.form.controls['id'].setValue(user.id);
    this.form.controls['firstName'].setValue(user.firstName);
    this.form.controls['lastName'].setValue(user.lastName);
    this.form.controls['email'].setValue(user.email);
  }

  public addUser(): void {
    this.addNewUser.emit(this.form.value);
    this.form.reset();
  }

  public updateUser(): void {
    this.updateNewUser.emit(this.form.value);
    this.form.reset();
  }

  public deleteUser(): void {
    this.user = undefined;
    this.form.reset();
  }
}
