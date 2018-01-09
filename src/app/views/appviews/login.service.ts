import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from './login';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../service/auth.service';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private auth: AuthService) {
    }


    validarLogin(login: Login) {
        return this.auth.getAccessToken(login);
        // this.auth.getAccessToken(login);
    }

    userInfo() {
        return this.auth.getValidateAcesso('api/user');
    }

    checkInLogin(): Observable<boolean> {
        return this.auth.checkInLogin();
    }

    logout() {
        return this.auth.checkOutLogin();
    }

}
