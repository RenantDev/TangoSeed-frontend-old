import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Observable';

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

    retornoLogin: Promise<any>;
    checkInLogin: Observable<any>;

    ngOnInit() {
        this.checkInfoLogin();
    }

    validarLogin() {

        this.retornoLogin = this.loginService.validarLogin(this.login);

    }

    checkInfoLogin() {
        this.checkInLogin = this.loginService.checkInLogin();
    }

    logout(){
        this.checkInLogin = this.loginService.logout();
    }

}

