import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/views/user/usuario';
import { AuthService } from 'app/service/auth.service';

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

