import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BorrowingFormComponent } from './borrowing-form/borrowing-form.component';
import { BorrowingPageComponent } from './borrowing-page/borrowing-page.component';
import { BorrowingListComponent } from './borrowing-list/borrowing-list.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BookFormularComponent } from './book-formular/book-formular.component';
import { BookZoznamComponent } from './book-zoznam/book-zoznam.component';
import { BookStrankaComponent } from './book-stranka/book-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrowingFormComponent,
    BorrowingPageComponent,
    BorrowingListComponent,
    BookFormularComponent,
    BookZoznamComponent,
    BookStrankaComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
