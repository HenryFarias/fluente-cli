import { User } from './../models/user';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    public longitude;
    public latitude;

    constructor (
        private router: Router,
    ) {}

    ngOnInit() {
        var user: User = JSON.parse(sessionStorage.getItem("user"));
        this.latitude = Number(user.endereco.latitude);
        this.longitude = Number(user.endereco.longitude);
    }

    public redirectToEvento() {
        this.router.navigate(['/evento']);
    }
}