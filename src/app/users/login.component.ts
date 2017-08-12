import { Component } from '@angular/core';
import { UserRegisterModel } from './user.register.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Authenticator } from '../utils/authenticator';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: []
})

export class LoginComponent {
    user = new UserRegisterModel();

    constructor(
        private userService: UserService,
        private router: Router,
        private authenticator:Authenticator) { }

    login() {
        this.userService
            .login(this.user)
            .subscribe(resp => {
                if (resp.success) {
                    this.authenticator.setToken(resp.token);
                    this.authenticator.setUser(resp.user);
                    this.router.navigateByUrl('/user/chanel');
                }
            })
    }
}