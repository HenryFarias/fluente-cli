import { Component, Input, ElementRef, NgZone, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { } from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

// http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

declare let $: any;

@Component({
    templateUrl: './places.component.html',
    selector: 'places',
})
export class PlacesComponent implements OnInit {

    @Output()
    public emitirLatLong = new EventEmitter();

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        //carrega o places autocomplete
        this.mapsAPILoader.load().then(() => {
            // let autocomplete = new google.maps.places.Autocomplete($('#' + this.teste), {
            //     types: ["address"]
            // });
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });

            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //pega o resultado do places
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            
                    //verifica resultado
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    
                    // envia os resultados
                    // this.emitirLatLong.emit([place.geometry.location.lat(), place.geometry.location.lng()]);
                    this.emitirLatLong.emit(place);
                });
            });
        });
    }
}