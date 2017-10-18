import { ModalComponent } from './../util/modal/modal.component';
import { AppHttpService } from './../app/app-http.service';
import { Router } from '@angular/router';
import { Evento } from './../models/evento';
import { EventoService } from './../services/evento.service';
import { Component, ViewChild } from '@angular/core';

@Component({
    templateUrl: './lista.component.html',
    selector: 'lista-evento',
    providers: [
        EventoService,
        AppHttpService,
    ]
})
export class ListaComponent {

    public eventos : Evento[] = [];
    public evento: Evento;
    public message:string = null;

    @ViewChild(ModalComponent)
    public modal: ModalComponent;

    constructor (
        private eventoService: EventoService,
        private httpService: AppHttpService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.eventoService.getAll(JSON.parse(sessionStorage.getItem("user"))).then((res) => {
            this.eventos = res.data;
        });
    }

    public delete() {
        this.httpService.builder('evento').remove(this.evento.id).then((res) => {
            this.eventos = res.data;
            this.modal.close();
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public setEvento(evento: Evento) {
        this.evento = evento;
        this.modal.open();
    }

    public edit(evento: Evento) {
        this.evento = evento;
        this.router.navigate(['/evento/edit/' + evento.id]);
    }
}