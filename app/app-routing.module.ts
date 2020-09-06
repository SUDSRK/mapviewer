import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {LogInPage} from './LogInPage'
import {HomePage} from './HomePage'
import {UserManagement} from './UserManagement'
import{MapViewer} from './MapViewer'
import { from } from 'rxjs';



const routes: Routes = [
  {path: '',                 component: HomePage },
  {path: 'LogIn',            component: LogInPage },
  {path: 'UserManagement',   component: UserManagement },
  {path: 'MapViewer',     component: MapViewer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
