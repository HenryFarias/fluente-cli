import { AppHttpService } from './../app/app-http.service';
import { ActivatedRoute } from '@angular/router';
import { Evento } from './../models/evento';
import { EventoService } from './../services/evento.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './detalhe.component.html',
    selector: 'detalhe-evento',
    providers: [
        EventoService,
        AppHttpService,
    ]
})
export class DetalheComponent {

    public evento: Evento;
    public message:string = null;
    public routeId: number;

    constructor (
        private eventoService: EventoService,
        private httpService: AppHttpService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.routeId = params['id'];
        });
    }

    public getEvento() {
        this.httpService.builder('evento').view(this.routeId).then((res) => {
            this.evento = res.data;
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }
}