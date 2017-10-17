import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    constructor (
        private router: Router,
    ) {}

    public redirectToEvento() {
        this.router.navigate(['/evento']);
    }
}