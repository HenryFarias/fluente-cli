import { MapsModule } from './../maps/maps.module';
import { ModalModule } from './../util/modal/modal.module';
import { AlertModule } from './../util/alert/alert.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppHttpService } from '../app/app-http.service';
import { LayoutModule } from '../layout/layout.module';
import { EventoComponent } from './evento.component';


const appRoutes: Routes = [
    {path: 'evento', children:[
        { path: '', component: EventoComponent}
    ]}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LayoutModule,
        AlertModule,
        ModalModule,
        MapsModule,
    ],
    declarations: [
        EventoComponent,
    ],
    providers: [AppHttpService],
    exports: [EventoComponent]
})

export class EventoModule {}