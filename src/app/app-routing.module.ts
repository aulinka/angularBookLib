import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BorrowingPageComponent} from "./borrowing-page/borrowing-page.component";


const routes: Routes = [
  {
    path: "borrowing",
    component: BorrowingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
