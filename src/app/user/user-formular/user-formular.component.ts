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
      name: new FormControl(null),
      contact: new FormControl(null)
    });
  }

  private fillUserForm(user: User): void {
    this.form.controls['id'].setValue(user.id);
    this.form.controls['name'].setValue(user.name);
    this.form.controls['contact'].setValue(user.contact);
  }

  public addUser(): void {
    this.addNewUser.emit({ id: Math.random(), name: this.form.value.name, contact: this.form.value.contact});
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
