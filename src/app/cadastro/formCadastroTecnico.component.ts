import { EmitUser } from './../shared/emitUser.service';
import { ModalComponent } from './../util/modal/modal.component';
import { CadastroService } from './../services/cadastro.service';
import { Idioma } from './../models/idioma';
import { Notificacao } from './../models/notificacao';
import { Nivel } from './../models/nivel';
import { AppHttpService } from './../app/app-http.service';
import { User } from './../models/user';
import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';

declare let $: any;

@Component({
    selector: 'form-cadastro-tecnico',
    templateUrl: './formCadastroTecnico.component.html',
    providers: [
        CadastroService,
        EmitUser,
    ]
})
export class FormCadastroTecnicoComponent {

    public niveis: Nivel;
    public notificacoes: Notificacao;
    public idiomas: Idioma;
    public user: User;
    public message:string = null;

    @Input()
    public openModal: boolean = false;

    @ViewChild(ModalComponent)
    public modal: ModalComponent;

    constructor (
        private httpService: AppHttpService,
        private cadastroService: CadastroService,
        private sharedUser: EmitUser,
    ) {}

    ngOnInit() {
        if (this.openModal) {
            this.user = JSON.parse(sessionStorage.getItem("user"));

            this.httpService.builder('user').create().then((res) => {
                this.notificacoes = res.data.notificacoes;
                this.niveis = res.data.niveis;
                this.idiomas = res.data.idiomas;
            });

            this.modal.open();
        } else {
            this.user = new User();
        }
    }

    public saveUser() {
        this.httpService.builder('user').save(this.user).then(() => {
            this.user.logado = true;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.sharedUser.setUser(this.user);
            this.modal.close();
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(error);
        });
    }

    public setMap(evento) {
        console.log("setMap");
        this.user.endereco.latitude = evento[0];
        this.user.endereco.longitude = evento[1];
    }
}