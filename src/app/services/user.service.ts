import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    public getAllForEvento(user: User) {
        let url = 'http://localhost/arquitetura-rest/public/user/allEventos/' + user.id;
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }
}

