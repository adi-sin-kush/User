import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  checked = false;

  createUser(user) {
    console.log('create account', user);
  }

  loginUser(user) {
    console.log('Login', user);
    console.log('Remember Me??', this.checked);
  }

  RememberMe(value: boolean) {
    this.checked = value;
  }

}
