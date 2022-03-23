import { Injectable } from '@angular/core';
import {User, UserZoznam} from "./app/models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserZoznam[]> {
    return this.http.get<UserZoznam[]>(`${this.apiUrl}`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, {firstname: user.name, lastname: user.contact});
  }
}
