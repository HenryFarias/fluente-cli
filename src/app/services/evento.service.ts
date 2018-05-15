import {User} from './../models/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoService {

    constructor(private http: Http) {}

    public getAllForMaps(user: User) {
        const url = 'http://localhost/arquitetura-rest/public/evento/allMaps/' + user.id;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    public getAll(user: User) {
        const url = 'http://localhost/arquitetura-rest/public/evento/all/' + user.id;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    public settingsSelect(text: string, single: boolean) {
        return {
            singleSelection: single,
            text: text,
            selectAllText: 'Selecionar todos',
            unSelectAllText: 'Desmarcar todos',
            enableSearchFilter: true,
        };
    }

    public converterListaParaSelect(array: any[]) {
        let listaVazia: boolean = true;

        array.forEach((value, index) => {
            if (value.id) {
                listaVazia = false;
                array[index] = {"id" : value.id, "itemName" : value.name};
            }
        });

        return !listaVazia ? array : [];
    }

    public converterDataParaDatePicker(data: string) {
        const array = data.split("-");
        const dia = array[2].split(" ");

        return dia[0] + "/" + array[1] + "/" + array[0];
    }

    public formatarData(data: any) {
        return new Date(data.year + "-" + data.month + "-" + data.day);
    }
}

