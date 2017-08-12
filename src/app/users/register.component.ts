import { Component } from '@angular/core';
import { UserRegisterModel } from './user.register.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: []
})
export class RegisterComponent {
    user = new UserRegisterModel();

    constructor(private userService: UserService,
        private router: Router) { }

    register() {
        this.userService
            .register(this.user)
            .subscribe(resp => {
                if (resp.success) {
                    this.router.navigateByUrl('/user/login');
                }
            })
    }
}