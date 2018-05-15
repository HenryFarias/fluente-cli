import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Security implements CanActivate, OnInit, CanActivateChild {

    constructor (
        private user: User,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.user.logado) {
            this.router.navigate(['/login']);
        }

        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.user.logado) {
            this.router.navigate(['/login']);
        }

        return true;
    }
}
