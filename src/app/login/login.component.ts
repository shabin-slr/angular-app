import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { };
  auth = {
    username : "",
    password : ""
  }

  login(){
    this.router.navigate(['/employees'])
  }
  ngOnInit() {
  }

}
