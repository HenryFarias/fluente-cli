import { Component, Input, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

// http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

@Component({
    templateUrl: './mapa.component.html',
    selector: 'mapa',
})
export class MapaComponent implements OnInit {

    public map: any;

    @Input()
    public latitude;
    
    @Input()
    public longitude;
    
    @Input()
    public zoom;

    constructor(
        private mapsAPILoader: MapsAPILoader,
    ) {}

    ngOnInit() {
        this.mapsAPILoader.load().then(() => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: new google.maps.LatLng(this.latitude, this.longitude)
            });
        });
    }

    public setMap(evento) {
        this.mapsAPILoader.load().then(() => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: new google.maps.LatLng(evento[0], evento[1])
            });
        });
    }
}