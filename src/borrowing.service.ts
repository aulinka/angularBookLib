import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Borrowing} from "./app/models/borrowing.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {

  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http : HttpClient) { }

  public getBorrowings() : Observable<Borrowing[]> {
    return this.http.get<Borrowing[]>(`${this.apiUrl}`);
  }
  public getBorrowing(borrowingId: number) : Observable<Borrowing> {
    return this.http.get<Borrowing>(`${this.apiUrl}/${borrowingId}`);
  }
  public createBorrowing(borrowing : Borrowing) : Observable<Borrowing>{
    return this.http.post<Borrowing>(`${this.apiUrl}`, borrowing);
  }
  public deleteBorrowing(borrowingId : number) : Observable<Borrowing>{
    return this.http.delete<Borrowing>(`${this.apiUrl}/${borrowingId}`)
  }
}
