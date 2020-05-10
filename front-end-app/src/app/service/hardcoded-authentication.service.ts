import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName, password) {
    if (userName === "a" && password === "a") {
      sessionStorage.setItem('autheticatedUser', userName);
      return true;
    } else {
      return false;
    }
  }


  isLogedIn() {
    let user = sessionStorage.getItem('autheticatedUser');
    return !(user == null);
  }


  logout() {
    sessionStorage.removeItem('autheticatedUser');
  }
}
