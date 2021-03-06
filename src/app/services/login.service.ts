import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    public autenticate(user: User) {
        const url = 'http://localhost/arquitetura-rest/public/login';

        return this.http.post(url, user).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    public exit() {

    }
}

