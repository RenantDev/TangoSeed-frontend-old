import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Login } from 'app/views/appviews/login';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(login: Login) {
    if (login.username === 'email@email.com' && login.password === 'teste') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['user']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
