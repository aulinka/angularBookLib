import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Borrowing, BorrowingList} from "./app/models/borrowing.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {

  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http : HttpClient) { }

  public getBorrowings() : Observable<BorrowingList[]> {
    return this.http.get<BorrowingList[]>(`${this.apiUrl}`);
  }
  public getBorrowing(borrowingId: string) : Observable<Borrowing> {
    return this.http.get<Borrowing>(`${this.apiUrl}/${borrowingId}`);
  }
  public createBorrowing(borrowing : Borrowing) : Observable<Borrowing>{
    return this.http.post<Borrowing>(`${this.apiUrl}`, {id: borrowing.id, borrower: borrowing.user, book: borrowing.book});
  }
}

