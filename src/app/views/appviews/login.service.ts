import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Login } from './login';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  private oauthUrl = 'http://api.tangoseed.com/oauth/token';

  getAccessToken(login: Login) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const postData = {
      username: login.username,
      password: login.password,
      client_id: 2,
      client_secret: 'cbA2pSWnY675qyPlgGn73l9wHrcQeaBXv337Pjnx',
      grant_type: 'password',
      scope: ''
    };

    return this.http.post(this.oauthUrl, JSON.stringify(postData), {
      headers: headers
    });
  }

  getUsers(accessToken: string): Observable<Login[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
    });

    return this.http.get(this.oauthUrl, {
      headers: headers
    })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
