import {Injectable} from '@angular/core';
import {Login} from '../views/appviews/login';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response} from '@angular/http';


@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    private access_token = null;
    private baseUrl = 'http://api.tangoseed.dev/';
    private oauthUrl = this.baseUrl + 'oauth/token';

    getAccessToken(login: Login) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const postData = {
            username: login.username,
            password: login.password,
            client_id: 2,
            client_secret: 'YED3SoQwpmfqPRIFbf2Lfcl18YcPloYeNbM8Xt9I',
            grant_type: 'password',
            scope: ''
        };

        return this.http.post(this.oauthUrl, postData, {
            headers: headers
        })
            .toPromise()
            .then((response: Response) => {
                let token = response.json().access_token;
                localStorage.setItem('token', token);
                return token;
            });


    }

    getValidateAcesso(url: string) {
        const headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        });

        return this.http.get(this.baseUrl + url, {
            headers: headers
        }).toPromise()
            .then((response: Response) => {
                return response.json();
            });
    }

    checkInLogin(): Observable<boolean> {
        const headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        });

        return this.http.get(this.baseUrl + 'api/user', {
            headers: headers
        }).map((response: Response) => {
            return response.json();
        });
    }

    checkOutLogin() {
        const headers = new Headers({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        });

        return this.http.get(this.baseUrl + 'api/logout', {
            headers: headers
        }).map((response: Response) => {
            return response.json();
        });
    }
}
