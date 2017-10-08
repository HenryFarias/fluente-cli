import { User } from './../models/user';
import { AppHttpService } from './../app/app-http.service';
import { Injectable, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CadastroService {

    constructor(
        private http: Http,
        private httpService: AppHttpService,
    ) {}

    public viaCep(cep: string) {
        let url = "https://viacep.com.br/ws/" + cep + "/json/";
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }
}

