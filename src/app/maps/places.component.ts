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

    @Input()
    public teste: string = "places";

    @Output()
    public emitirLatLong = new EventEmitter();

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        console.log(this.teste);
        //carrega o places autocomplete
        this.mapsAPILoader.load().then(() => {
            console.log(this.teste);
            let autocomplete = new google.maps.places.Autocomplete($('#' + this.teste), {
                types: ["address"]
            });
            // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            //     types: ["address"]
            // });

            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //pega o resultado do places
                    console.log("2");
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            
                    //verifica resultado
                    if (place.geometry === undefined || place.geometry === null) {
                        console.log("3");
                        return;
                    }
                    
                    // envia os resultados
                    this.emitirLatLong.emit([place.geometry.location.lat(), place.geometry.location.lng()]);
                    console.log("4");
                });
            });
        });
    }
}