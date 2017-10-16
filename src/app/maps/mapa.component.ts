import { Evento } from './../models/evento';
import { AppHttpService } from './../app/app-http.service';
import { Component, Input, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

// http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

@Component({
    templateUrl: './mapa.component.html',
    selector: 'mapa',
    styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

    public map: any;
    public message:string = null;
    public eventos : Evento[] = [];

    @Input()
    public latitude;
    
    @Input()
    public longitude;
    
    @Input()
    public zoom;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private httpService: AppHttpService,
    ) {}

    ngOnInit() {
        this.httpService.builder('evento').list().then((res) => {
            this.eventos = res.data;
            this.eventos = this.castToNumber(this.eventos);
        }).catch(error => {
            var erro = error.json();
            this.message = "Nenhum evento disponível";
            console.log(erro.error);
        });
    }

    private castToNumber(eventos : Evento[]) {
        eventos.forEach((evento) => {
            evento.endereco.latitude = Number(evento.endereco.latitude);
            evento.endereco.longitude = Number(evento.endereco.longitude);
        });

        return eventos;
    }

    public setMap(evento) {
        this.latitude = evento.geometry.location.lat();
        this.longitude = evento.geometry.location.lng();
    }
}