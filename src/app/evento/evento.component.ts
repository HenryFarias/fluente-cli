// import { SelectComponent } from './../util/select-multiplo/select.component';
import { UserService } from './../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapsService } from './../services/maps.service';
import { Idioma } from './../models/idioma';
import { User } from './../models/user';
import { Evento } from './../models/evento';
import { Nivel } from './../models/nivel';
import { ModalComponent } from './../util/modal/modal.component';
import { EventoService } from './../services/evento.service';
import { Component, Input, ViewChild } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { IMyDpOptions } from 'mydatepicker';

// Select múltiplo - https://github.com/softsimon/angular-2-dropdown-multiselect - https://www.npmjs.com/package/angular2-multiselect-dropdown

@Component({
    templateUrl: './evento.component.html',
    selector: 'form-evento',
    styleUrls: ['./evento.component.css'],
    providers: [
        EventoService,
        MapsService,
        UserService,
    ]
})
export class EventoComponent {

    public message:string = null;
    public niveis: Nivel;
    public evento: Evento;
    public professores: User;
    public idiomas: Idioma;
    public routeId: number;
    public usersListDropdown: any[] = [];
    public usersSelecionados: any[] = [];
    dropdownSettings = {};

    constructor (
        private httpService: AppHttpService,
        private mapsService: MapsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.dropdownSettings = {
            singleSelection: false, 
            text:"Participantes do evento",
            selectAllText:'Selecionar todos',
            unSelectAllText:'Desmarcar todos',
            enableSearchFilter: true,
            classes:""
        };

        this.evento = new Evento();

        this.activatedRoute.params.subscribe(params => {
            this.routeId = params['id'];
        });

        this.httpService.builder('user').create().then((res) => {
            this.niveis = res.data.niveis;
            this.professores = res.data.professores;
            this.idiomas = res.data.idiomas;
        }).catch(error => {
            var erro = error.json();
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

    private converterListaParaSelect(users: any[]) {
        users.forEach((user, index) => {
            users[index] = {"id":user.id,"itemName":user.name};
        });

        return users;
    }

    private converterDataParaDatePicker(data: string) {
        var array = data.split("-");
        return { date: { year: array[0], month: array[1].replace("0", ""), day: array[2].replace("0", "") } };
    }

    private getUsers() {
        this.userService.getAllForEvento(this.evento.dono).then((res) => {
            this.usersListDropdown = this.converterListaParaSelect(res.data);
        }).catch(error => {
            var erro = error.json();
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
            this.getUsers();
            this.usersSelecionados = this.converterListaParaSelect(this.evento.users);
            this.evento.data = this.converterDataParaDatePicker(this.evento.data);
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    private formatarData(data: any) {
        return new Date(data.year + "-" + data.month + "-" + data.day);
    }

    public saveEvento() {
        this.evento.data = this.evento.data.jsdate;
        this.evento.users = this.usersSelecionados;

        this.httpService.builder('evento').save(this.evento).then((res) => {
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public updateEvento() {
        this.evento.users = this.usersSelecionados;
        if (this.evento.data.jsdate) {
            this.evento.data = this.evento.data.jsdate;
        } else {
            this.evento.data = this.formatarData(this.evento.data.date);
        }
        
        this.httpService.builder('evento').update(this.evento.id, this.evento).then((res) => {
            this.router.navigate(['/evento/list']);
        }).catch(error => {
            var erro = error.json();
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

    // https://github.com/kekeh/mydatepicker
    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
        dayLabels: {su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sáb'},
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje',
    };
}