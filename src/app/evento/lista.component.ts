import { Router } from '@angular/router';
import { Evento } from './../models/evento';
import { EventoService } from './../services/evento.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './lista.component.html',
    selector: 'lista-evento',
    providers: [
        EventoService,
    ]
})
export class ListaComponent {

    public eventos : Evento[] = [];

    constructor (
        private eventoService: EventoService,
    ) {}

    ngOnInit() {

    }
}