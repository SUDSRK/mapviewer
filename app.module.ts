import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LogInPage} from './LogInPage'
import {HomePage} from './HomePage'
import {UserManagement} from './UserManagement'
import{MapViewer} from './MapViewer'
import { from } from 'rxjs';


 
@NgModule({
  declarations: [
    AppComponent,LogInPage,HomePage,UserManagement,MapViewer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
