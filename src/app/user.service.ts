import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;

  constructor() { 
      this.isUserLoggedIn = false;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    console.log("in user setUserLoggedIn ",  this.isUserLoggedIn);
  }
  getUserLoggedIn(){
    console.log("in  getUserLoggedIn ",  this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }
}
