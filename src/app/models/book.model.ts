export class Book {

  id?: number;
  name: string;
  author: string;
  available: number;

  constructor(book: Book) {
    this.id = book.id;
    this.name = book.name;
    this.author = book.author;
    this.available = book.available;
  }
}

export class BookZoznam {
    id?: number;
    name: string;
    author: string;
    available: number;

    constructor(book: BookZoznam) {
      this.id = book.id;
      this.name = book.name;
      this.author = book.author;
      this.available = book.available;
    }
}
