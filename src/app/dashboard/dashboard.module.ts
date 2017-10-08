import { EventoModule } from './../evento/evento.module';
import { FormCadastroTecnicoComponent } from './../cadastro/formCadastroTecnico.component';
import { AlertModule } from './../util/alert/alert.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { CadastroModule } from './../cadastro/cadastro.module';


const appRoutes: Routes = [
    {path: 'dashboard', children:[
        { path: '', component: DashboardComponent}
    ]}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        LayoutModule,
        AlertModule,
        CadastroModule,
        EventoModule,
    ],
    declarations: [
        DashboardComponent,
    ]
})

export class DashboardModule {}