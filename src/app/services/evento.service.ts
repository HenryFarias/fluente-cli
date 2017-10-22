import { User } from './../models/user';
import { Evento } from './../models/evento';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoService {

    constructor(private http: Http) {}

    public getAllForMaps(user: User) {
        let url = 'http://localhost/arquitetura-rest/public/evento/allMaps/' + user.id;
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    public getAll(user: User) {
        let url = 'http://localhost/arquitetura-rest/public/evento/all/' + user.id;
        
        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    public settingsSelect(text: string, single: boolean) {
        return {
            singleSelection: single, 
            text: text,
            selectAllText:'Selecionar todos',
            unSelectAllText:'Desmarcar todos',
            enableSearchFilter: true,
        };
    }

    public converterListaParaSelect(array: any[]) {
        array.forEach((user, index) => {
            array[index] = {"id":user.id,"itemName":user.name};
        });

        return array;
    }

    public converterDataParaDatePicker(data: string) {
        var array = data.split("-");
        return { date: { year: array[0], month: array[1].replace("0", ""), day: array[2].replace("0", "") } };
    }

    public formatarData(data: any) {
        return new Date(data.year + "-" + data.month + "-" + data.day);
    }
}

