import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export class HellowWorld{

  constructor(message:String){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeBackEndService() {
    return this.httpClient.get<HellowWorld>('http://localhost:8080/helloWord');
  }
}
