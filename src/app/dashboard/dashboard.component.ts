import { Component, Input, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    public user: User;
    public modalCadastro: boolean = false;
    public modalEvento: boolean = false;

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (!this.user.logado) {
            this.modalCadastro = true;
        }
    }

    public openModalEvento() {
        this.modalEvento = true;
    }
}