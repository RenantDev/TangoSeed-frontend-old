import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Rx';

// import { AuthService } from 'app/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.template.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit {

    private login: Login = new Login();
    constructor(private loginService: LoginService) {

    }

    retornoLogin: Observable<any>;

    ngOnInit() {
    }

    validarLogin() {
        // this.login.username = 'asdasd';
        // console.log(this.login.username);

        this.retornoLogin = this.loginService.getAccessToken(this.login);

        // this.authService.fazerLogin(this.login);
    }

}

