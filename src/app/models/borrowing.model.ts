export class Borrowing{
  id: string;
  book: string;
  user: string;


  constructor(borrowing : Borrowing) {
    this.id = borrowing.id;
    this.book = borrowing.book;
    this.user = borrowing.user;
  }
}
export class BorrowingList {
  id: number;
  bookId: number;
  authorName: string;
  title: string;
  customerId: number;
  customerName: string;

}
