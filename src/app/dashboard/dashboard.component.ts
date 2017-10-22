import { ModalComponent } from './../util/modal/modal.component';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    public longitude;
    public latitude;

    @ViewChild(ModalComponent)
    public modal: ModalComponent;

    constructor (
        private router: Router,
    ) {}

    ngOnInit() {
        var user: User = JSON.parse(sessionStorage.getItem("user"));
        if (user.idiomas.length == 0) {
            this.modal.open();
        }
        this.latitude = Number(user.endereco.latitude);
        this.longitude = Number(user.endereco.longitude);
    }

    public redirectToEvento() {
        this.router.navigate(['/evento']);
    }
}