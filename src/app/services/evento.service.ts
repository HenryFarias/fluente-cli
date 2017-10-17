import { User } from './../models/user';
import { Evento } from './../models/evento';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoService {

    constructor(private http: Http) {}

    getAllForMaps(user: User) {
        let url = 'http://localhost/arquitetura-rest/public/evento/allMaps/' + user.id;
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    getAll(user: User) {
        let url = 'http://localhost/arquitetura-rest/public/evento/all/' + user.id;
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }
}

