import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Login } from './login';


@Injectable()
export class LoginService {

    constructor(private http: Http) {
    }

    private oauthUrl = 'http://api.tangoseed.dev/oauth/token';

    getAccessToken(login: Login) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const postData = {
            username: login.username,
            password: login.password,
            client_id: 2,
            client_secret: 'RGNmOzt7WQ8SdNiCcJKKDoYrsFqI2tudopFjOJU3',
            grant_type: 'password',
            scope: ''
        };

        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // getUsers(accessToken: string): Observable<Usuario[]> {
    //
    //     const headers = new Headers({
    //         'Accept': 'application/json',
    //         'Authorization': 'Bearer ' + accessToken,
    //     });
    //
    //     return this.http.get(this.usersUrl, {
    //         headers: headers
    //     })
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
}
