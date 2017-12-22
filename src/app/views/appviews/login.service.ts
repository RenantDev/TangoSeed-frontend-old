import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from './login';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }

    private oauthUrl = 'http://api.tangoseed.dev/oauth/token';


    getAccessToken(login: Login) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const postData = {
            username: login.username,
            password: login.password,
            client_id: 2,
            client_secret: 'IpQ4Bdj2Q6idXapi9QhFhaV6Z1kMiRokkNpBgvEd',
            grant_type: 'password',
            scope: ''
        };

        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        });

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
