import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
})
export class PerfilComponent {

    constructor (
        private router: Router,
    ) {}

    public redirectToCadastro(id: number) {
        this.router.navigate(['/cadastro/' + id]);
    }
}