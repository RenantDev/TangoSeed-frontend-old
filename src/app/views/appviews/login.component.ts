import { Component, OnInit } from '@angular/core';
import { Login } from './login';
// import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {

  private login: Login = new Login();

    // constructor(private authService: AuthService) {
    //
    // }

    ngOnInit() {
    }

    validarLogin() {
        // this.login.username = 'asdasd';
      console.log(this.login.username);
      // this.authService.fazerLogin(this.login);
    }

  }

