import { MapaComponent } from './mapa.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        MapaComponent,
    ],
    exports: [
        MapaComponent
    ]
})

export class MapsModule {}