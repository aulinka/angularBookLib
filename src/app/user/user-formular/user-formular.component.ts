import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-formular',
  templateUrl: './user-formular.component.html',
  styleUrls: ['./user-formular.component.css']
})
export class UserFormularComponent {

  user: User = { id: 987,name: 'aaa', contact: 'bbb' }

  constructor() { }

  addUser(){
    let u = {id: this.user.id, name: this.user.name, contact: this.user.contact}
  }

}

