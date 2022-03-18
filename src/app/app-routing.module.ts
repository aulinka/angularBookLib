import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {UserStrankaComponent} from "./user/user-stranka/user-stranka.component";
import {BookStrankaComponent} from "./book/book-stranka/book-stranka.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {
    path: "borrowing",
    component: BorrowingPageComponent
  },
  {
    path:"user",
    component: UserStrankaComponent
  },
  {
    path: "book",
    component: BookStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
