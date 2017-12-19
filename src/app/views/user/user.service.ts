import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Usuario } from './usuario';


@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    private oauthUrl = "http://server.techalin.com/oauth/token";
    private usersUrl = "http://server.techalin.com/api/users";

    getAccessToken() {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        let postData = {
            grant_type: "password",
            client_id: 2,
            client_secret: "RGNmOzt7WQ8SdNiCcJKKDoYrsFqI2tudopFjOJU3",
            username: "albanafmeti@gmail.com",
            password: "password",
            scope: ""
        }

        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUsers(accessToken: string): Observable<Usuario[]> {

        var headers = new Headers({
            "Accept": "application/json",
            "Authorization": "Bearer " + accessToken,
        });

        return this.http.get(this.usersUrl, {
            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
