import {Injectable} from '@angular/core';
import {Login} from '../views/appviews/login';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';


@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    protected access_token;
    private baseUrl = 'http://api.tangoseed.dev/';
    private oauthUrl = this.baseUrl + 'oauth/token';
    private userUrl = this.baseUrl + 'api/user';

    getAccessToken(login: Login) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const postData = {
            username: login.username,
            password: login.password,
            client_id: 2,
            client_secret: 'QFHQN4UFlhBXXtYEB9v3ioUHXfdBEQ8dmVQRCbii',
            grant_type: 'password',
            scope: ''
        };

        this.access_token = this.http.post(this.oauthUrl, postData, {
            headers: headers
        }).map(response => response.json().access_token);

        return this.http.post(this.oauthUrl, postData, {
            headers: headers
        }).map(response => response.json().access_token);

        // if (!isArray(valida)) {
        //     return valida['access_token'];
        // } else {
        //     return valida;
        //
        // }

    }

    getValidateAcesso(accessToken: string): Observable<Login[]> {
        const headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        });

        return this.http.get(this.userUrl, {
            headers: headers
        }).map(response => response.json());
    }
}
