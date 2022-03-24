import { Injectable } from '@angular/core';
import {User, UserZoznam} from "./app/models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "./app/models/book.model";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserZoznam[]> {
    return this.http.get<UserZoznam[]>(`${this.apiUrl}`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, {name: user.name, contact: user.contact});
  }
  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}`, {name: user.name, contact: user.contact});
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
