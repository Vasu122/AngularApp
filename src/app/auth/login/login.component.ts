import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute,RouterLinkActive } from '@angular/router';

import {UserService} from '../../user.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private user:UserService
    ) { }

  ngOnInit() {
  }
  loginUser(e){
    debugger
    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(this.router);
    if(username == 'admin' && password == 'admin'){
      console.log("--------------------- in login section Here");
      console.log(username,password);
      this.user.setUserLoggedIn();
      this.router.navigate(['admin/dashboard']); 
    }
    else{
      //this.router.navigate(["auth/login"]);
    }
  }
}
