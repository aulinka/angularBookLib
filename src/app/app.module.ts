import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BookFormularComponent } from './book/book-formular/book-formular.component';
import { BookZoznamComponent } from './book/book-zoznam/book-zoznam.component';
import { BookStrankaComponent } from './book/book-stranka/book-stranka.component';
import {UserZoznamComponent} from "./user/user-zoznam/user-zoznam.component";
import {UserFormularComponent} from "./user/user-formular/user-formular.component";
import {UserStrankaComponent} from "./user/user-stranka/user-stranka.component";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrowingFormComponent,
    BorrowingPageComponent,
    BorrowingListComponent,
    BookFormularComponent,
    BookZoznamComponent,
    BookStrankaComponent,
    UserFormularComponent,
    UserStrankaComponent,
    UserZoznamComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
