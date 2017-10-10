import { User } from './../models/user';
import { AppHttpService } from './../app/app-http.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './gridSeguidores.component.html',
    selector: 'seguidores',
})
export class GridSeguidoresComponent {

    constructor (private http: AppHttpService) {}

    public seguidores: User;
    public user: User;

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem("user"));

        this.http.builder('seguidores').view(this.user.id).then((res) => {
            this.seguidores = res.data.seguidores;
        });
    }
}