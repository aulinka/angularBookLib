export class User {
  id: number;
  name: string;
  contact: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.contact = user.contact;
  }
}

export class UserZoznam {
  id: number;
  name: string;
  contact: string;

  /*constructor(user: UserZoznam) {
    this.id = user.id;
    this.name = user.name;
    this.contact = user.contact;
  }*/
}
