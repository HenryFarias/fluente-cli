import { SelectComponent } from './../util/select-multiplo/select.component';
import { ListaComponent } from './lista.component';
import { DetalheComponent } from './detalhe.component';
import { MapsModule } from './../maps/maps.module';
import { ModalModule } from './../util/modal/modal.module';
import { AlertModule } from './../util/alert/alert.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { AppHttpService } from '../app/app-http.service';
import { LayoutModule } from '../layout/layout.module';
import { EventoComponent } from './evento.component';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


const appRoutes: Routes = [
    {path: 'evento', children:[
        { path: '', component: EventoComponent},
        { path: 'list', component: ListaComponent},
        { path: 'edit/:id', component: EventoComponent},
        { path: ':id', component: EventoComponent},
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
        MyDatePickerModule,
        Ng2CompleterModule,
        AngularMultiSelectModule,
    ],
    declarations: [
        EventoComponent,
        ListaComponent,
        SelectComponent,
        DetalheComponent
    ],
    providers: [AppHttpService],
    exports: [EventoComponent]
})

export class EventoModule {}