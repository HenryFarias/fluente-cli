import { EmitUser } from './../shared/emitUser.service';
import { LoginService } from '../services/login.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'form-login',
    templateUrl: './formLogin.component.html',
    providers: [EmitUser, LoginService]
})
export class FormLoginComponent {

    public user: User;
    public message:string = null;

    constructor (
        private loginService: LoginService, 
        private router: Router,
        private sharedUser: EmitUser
    ) {}

    ngOnInit() {
        this.user = new User();
    }

    login() {
        this.message = null;
        
        this.loginService.autenticate(this.user).then(() => {
            this.user.logado = true;
            this.sharedUser.setUser(this.user);
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
        });
    }
}