import { Component, Input } from '@angular/core';

declare let google: any;

@Component({
    templateUrl: './mapa.component.html',
    selector: 'mapa',
})
export class MapaComponent {

    public map: any;

    @Input()
    public latitude;

    @Input()
    public longitude;

    constructor () {}

    ngOnInit() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: new google.maps.LatLng(this.latitude, this.longitude)
        });
    }
}