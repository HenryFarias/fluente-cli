import {UserService} from './../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MapsService} from './../services/maps.service';
import {Idioma} from './../models/idioma';
import {User} from './../models/user';
import {Evento} from './../models/evento';
import {Nivel} from './../models/nivel';
import {EventoService} from './../services/evento.service';
import {Component, OnInit} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';

// Select múltiplo - https://www.npmjs.com/package/angular2-multiselect-dropdown

@Component({
    templateUrl: './evento.component.html',
    selector: 'fluente-form-evento',
    styleUrls: ['./evento.component.css'],
    providers: [
        EventoService,
        MapsService,
        UserService,
    ]
})
export class EventoComponent implements OnInit {

    public message: string = null;
    public niveis: Nivel;
    public evento: Evento;
    public professores: User;
    public idiomas: Idioma;
    public routeId: number;

    public usersListDropdown: any[] = [];
    public usersSelecionados: any[] = [];
    public userSettings: any;

    public professoresListDropdown: any[] = [];
    public professorSelecionado: any[] = [];
    public professorSettings: any;

    public niveisListDropdown: any[] = [];
    public nivelSelecionado: any[] = [];
    public nivelSettings: any;

    public idiomasListDropdown: any[] = [];
    public idiomaSelecionado: any[] = [];
    public idiomaSettings: any;

    constructor (
        private httpService: AppHttpService,
        private mapsService: MapsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private eventoService: EventoService,
    ) {}

    ngOnInit() {
        this.userSettings = this.eventoService.settingsSelect("Participantes do evento", false);
        this.professorSettings = this.eventoService.settingsSelect("Professor convidado", true);
        this.nivelSettings = this.eventoService.settingsSelect("Nível", true);
        this.idiomaSettings = this.eventoService.settingsSelect("Idioma", true);

        this.evento = new Evento();

        this.activatedRoute.params.subscribe(params => {
            this.routeId = params['id'];
        });

        this.httpService.builder('user').create().then((res) => {
            this.niveisListDropdown = this.eventoService.converterListaParaSelect(res.data.niveis);
            this.professoresListDropdown = this.eventoService.converterListaParaSelect(res.data.professores);
            this.idiomasListDropdown = this.eventoService.converterListaParaSelect(res.data.idiomas);
        }).catch(error => {
            const erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });

        if (this.routeId) {
            this.getEvento();
        } else {
            this.evento.dono = JSON.parse(sessionStorage.getItem("user"));
            this.getUsers();
        }
    }

    private getUsers() {
        this.userService.getAllForEvento(this.evento.dono).then((res) => {
            this.usersListDropdown = this.eventoService.converterListaParaSelect(res.data);
        }).catch(error => {
            const erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public getEvento() {
        this.httpService.builder('evento').view(this.routeId).then((res) => {
            this.evento = res.data;
            if (!this.evento.professor) {
                this.evento.professor = new User();
            }

            console.log(this.eventoService.converterListaParaSelect([this.evento.professor]));

            this.nivelSelecionado = this.eventoService.converterListaParaSelect([this.evento.nivel]);
            this.professorSelecionado = this.eventoService.converterListaParaSelect([this.evento.professor]);
            this.idiomaSelecionado = this.eventoService.converterListaParaSelect([this.evento.idioma]);

            this.getUsers();
            this.usersSelecionados = this.eventoService.converterListaParaSelect(this.evento.users);
            this.evento.data = this.eventoService.converterDataParaDatePicker(this.evento.data);
        }).catch(error => {
            const erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public saveEvento() {
        this.evento.users = this.usersSelecionados;
        this.evento.idioma.id = this.idiomaSelecionado[0].id;
        this.evento.nivel.id = this.nivelSelecionado[0].id;
        this.evento.professor.id = this.professorSelecionado[0].id;

        this.httpService.builder('evento').save(this.evento).then((res) => {
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            const erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public updateEvento() {
        this.evento.users = this.usersSelecionados;
        this.evento.idioma.id = this.idiomaSelecionado[0].id;
        this.evento.nivel.id = this.nivelSelecionado[0].id;
        this.evento.professor.id = this.professorSelecionado[0].id;

        this.httpService.builder('evento').update(this.evento.id, this.evento).then((res) => {
            this.router.navigate(['/evento/list']);
        }).catch(error => {
            const erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public setMap(evento) {
        this.evento.endereco.latitude = evento.geometry.location.lat();
        this.evento.endereco.longitude = evento.geometry.location.lng();
        this.evento.endereco.cidade.name = this.mapsService.getCidade(evento);
        this.evento.endereco.name = evento.formatted_address;
    }
}
