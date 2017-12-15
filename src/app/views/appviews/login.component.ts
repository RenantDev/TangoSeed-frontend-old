import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {

    private usuario: Usuario = new Usuario();

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
    }

    fazerLogin() {
      // console.log(this.usuario);
      this.authService.fazerLogin(this.usuario)
    }

  }

