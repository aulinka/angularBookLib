import { Component } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-zoznam',
  templateUrl: './user-zoznam.component.html',
  styleUrls: ['./user-zoznam.component.css']
})
export class UserZoznamComponent  {

  users: User[] = []

  constructor() { }



}
