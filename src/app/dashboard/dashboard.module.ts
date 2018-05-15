import {ModalModule} from './../util/modal/modal.module';
import {UserModule} from './../user/user.module';
import {MapsModule} from './../maps/maps.module';
import {EventoModule} from './../evento/evento.module';
import {AlertModule} from './../util/alert/alert.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from '../layout/layout.module';
import {DashboardComponent} from './dashboard.component';
import {CadastroModule} from './../cadastro/cadastro.module';
import {Security} from '../security/security';


const appRoutes: Routes = [
    {
        path: 'dashboard',
        canActivateChild: [Security],
        children: [{
            path: '', component: DashboardComponent
        }]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        LayoutModule,
        AlertModule,
        CadastroModule,
        EventoModule,
        MapsModule,
        UserModule,
        ModalModule,
    ],
    declarations: [
        DashboardComponent,
    ]
})

export class DashboardModule {}
