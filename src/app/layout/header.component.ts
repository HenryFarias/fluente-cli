import { EmitUser } from './../shared/emitUser.service';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import '../../assets/css/styles.css';

import { User } from '../models/user';

@Component({
    templateUrl: './header.component.html',
    providers: [EmitUser]
})
export class HeaderComponent implements OnInit {

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

    public exit() {
        this.user = new User();
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }

    public redirect(rota: string) {
        this.router.navigate([rota]);
        // this.router.navigate(['/evento/list']);
    }
}
