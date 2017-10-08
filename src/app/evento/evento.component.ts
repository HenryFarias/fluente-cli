import { User } from './../models/user';
import { Evento } from './../models/evento';
import { Nivel } from './../models/nivel';
import { ModalComponent } from './../util/modal/modal.component';
import { EventoService } from './../services/evento.service';
import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

declare let google: any;

@Component({
    templateUrl: './evento.component.html',
    selector: 'form-evento',
    providers: [
        EventoService,
    ]
})
export class EventoComponent {

    public message:string = null;
    public niveis: Nivel;
    public evento: Evento;
    public professores: User;

    @Input()
    public openModal: boolean = false;

    @ViewChild(ModalComponent)
    public modal: ModalComponent;

    constructor (
        private httpService: AppHttpService,
    ) {}

    // A cada mudança no componente passa por esse evento
    ngOnChanges() {
        if (this.openModal) {
            
            this.httpService.builder('user').create().then((res) => {
                this.niveis = res.data.niveis;
                this.professores = res.data.professores;
            });

            this.modal.open();
        }
    }

    ngOnInit() {
        this.evento = new Evento();
    }

    public saveEvento() {
        this.httpService.builder('evento').save(this.evento).then(() => {
            this.modal.close();
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }
}