import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from 'app/service/auth.service';
import {Login} from '../views/appviews/login';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this.authService.checkInLogin()) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }

}
