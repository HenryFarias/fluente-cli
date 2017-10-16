import { AlertModule } from './../util/alert/alert.module';
import { PlacesComponent } from './places.component';
import { MapaComponent } from './mapa.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyAXFDYZMiktM42_tvG49c3R5DfWhP5IedE",
            libraries: ["places"]
        }),
        AlertModule,
    ],
    declarations: [
        MapaComponent,
        PlacesComponent,
    ],
    exports: [
        MapaComponent,
        PlacesComponent,
    ]
})

export class MapsModule {}