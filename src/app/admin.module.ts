import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import {RouterModule,Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth/auth.guard';
import {UserService} from './user.service';
debugger
// routes
export const adminRoutes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    NavbarComponent, 
    DashboardComponent
  ],
  providers:[
    UserService,
    AuthGuard   
  ]
})
export class AdminModule { }
