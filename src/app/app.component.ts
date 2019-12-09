import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createUser(user) {
    console.log('create account', user);
  }

  LoginUser(user) {
    console.log('Login', user);
  }

}
