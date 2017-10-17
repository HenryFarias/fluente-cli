import { EmitUser } from './../shared/emitUser.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../assets/css/styles.css';

import { User } from '../models/user';

@Component({
    templateUrl: './header.component.html',
    providers: [EmitUser]
})
export class HeaderComponent {

    public user: User;

    ngOnInit() {
        this.user = new User();

        EmitUser.emitirUser.subscribe((user) => {
            this.user = user;
        });
    }

    constructor (
        private router: Router
    ) {}

    public backToHome() {
        if (this.user.logado) {
            this.router.navigate(['/dashboard']);
        } else {
            this.router.navigate(['/login']);
        }
    }

    public sair() {
        this.user.logado = false;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/login']);
    }

    public eventos() {
        this.router.navigate(['/evento/list']);
    }

    public setUser(user: User) {
        this.user = user;
    }

}
