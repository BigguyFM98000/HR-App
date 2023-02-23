import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from '../pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { LoginComponent } from './components/Auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    AddComponent,
    ViewComponent,
    SearchPipe,
    NavbarComponent,
    TestComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
