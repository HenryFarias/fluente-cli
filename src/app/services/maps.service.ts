import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MapsService {

    constructor(private http: Http) {}

    public getCidade(places): string {
        let retorno: string = null;

        places.address_components.forEach(element => {
            if (element.types[0] == "administrative_area_level_2") {
                retorno = element.long_name;
            }
        });

        return retorno;
    }
}

