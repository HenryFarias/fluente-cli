import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'form-cadastro',
    templateUrl: './formCadastro.component.html'
})
export class FormCadastroComponent {

    public user: User;
    public routeId: number;
    public message:string = null;

    constructor (
        private router: Router,
        private activatedRoute: ActivatedRoute,
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
}