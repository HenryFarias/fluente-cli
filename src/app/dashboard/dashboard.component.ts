import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    public modalEvento: boolean = false;

    public openModalEvento() {
        this.modalEvento = true;
    }
}