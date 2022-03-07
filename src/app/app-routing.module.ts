import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BorrowingPageComponent} from "./borrowing-page/borrowing-page.component";
import {UserStrankaComponent} from "./user-stranka/user-stranka.component";
import {BookStrankaComponent} from "./book-stranka/book-stranka.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
