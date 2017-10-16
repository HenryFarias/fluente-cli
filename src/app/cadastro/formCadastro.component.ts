import { MapsService } from './../services/maps.service';
import { element } from 'protractor';
import { Cidade } from './../models/cidade';
import { CadastroService } from './../services/cadastro.service';
import { EmitUser } from './../shared/emitUser.service';
import { AppHttpService } from './../app/app-http.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'form-cadastro',
    templateUrl: './formCadastro.component.html',
    providers: [
        CadastroService,
        EmitUser,
        MapsService,
    ]
})
export class FormCadastroComponent {

    public user: User;
    public routeId: number;
    public message:string = null;

    constructor (
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private httpService: AppHttpService,
        private sharedUser: EmitUser,
        private mapsService: MapsService,
    ) {}

    ngOnInit() {
        // Recebe o parametro da rota
        this.activatedRoute.params.subscribe(params => {
            this.routeId = params['id'];
        });
        this.user = new User();
    }

    redirectToDashboard() {
        this.user.logado = false;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/dashboard']);
    }

    public saveUser() {
        this.httpService.builder('user').save(this.user).then((res) => {
            this.user = res.data;
            this.user.logado = true;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.sharedUser.setUser(this.user);
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(error);
        });
    }

    public setMap(evento) {
        this.user.endereco.latitude = evento.geometry.location.lat();
        this.user.endereco.longitude = evento.geometry.location.lng();
        this.user.endereco.cidade.name = this.mapsService.getCidade(evento);
    }
}