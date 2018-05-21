import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Security implements CanActivate, OnInit, CanActivateChild {

    constructor (
        private router: Router
    ) {}

    ngOnInit(): void {

    }

    private getUser(): User {
        let user: User;
        user = JSON.parse(sessionStorage.getItem("user"));

        if (!user) {
            user = new User();
        }

        return user;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.getUser().logado) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.getUser().logado) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
