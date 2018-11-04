import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private user:UserService) { }

  ngOnInit() {
  }

}