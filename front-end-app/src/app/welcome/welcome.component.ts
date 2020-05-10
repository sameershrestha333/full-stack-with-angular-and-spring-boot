import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome"
  name = ''
  messageFromBackend = ''
  errorMessage = ''

  constructor(private router: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.router.snapshot.params['name']
  }


  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeBackEndService());
    this.welcomeDataService.executeBackEndService().subscribe(
      responce => this.handleSuccessResponse(responce),
      error => this.handleError(error)
    );
  }

  handleSuccessResponse(responce) {
    this.messageFromBackend = responce.message;
  }

  handleError(error) {
    this.errorMessage = error.message;
  }
}
