import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'userName'
  password = ''
  errorMessage = 'invalidCredentials'
  invalidUser = false;

  constructor(private router: Router, private autheService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //if(this.userName==="a"&& this.password==="a"){
    if (this.autheService.authenticate(this.userName, this.password)) {
      // redirect to login page
      this.router.navigate(['welcome', this.userName])
      this.invalidUser = false
    } else {
      this.invalidUser = true
    }
  }

}
