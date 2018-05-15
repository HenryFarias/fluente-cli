import { MapsModule } from './../maps/maps.module';
import { ModalModule } from './../util/modal/modal.module';
import { FormCadastroComponent } from './formCadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { AppHttpService } from '../app/app-http.service';
import { CadastroComponent } from './cadastro.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginModule } from '../login/login.module';
import { AlertModule } from '../util/alert/alert.module';
import { FormCadastroTecnicoComponent } from './formCadastroTecnico.component';
import {Security} from '../security/security';
import {SecurityModule} from '../security/security.module';


const appRoutes: Routes = [
    {
        path: 'cadastro',
        canActivateChild: [Security],
        children: [{
            path: ':id', component: CadastroComponent
        }]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LayoutModule,
        LoginModule,
        AlertModule,
        ModalModule,
        MapsModule,
        SecurityModule,
    ],
    declarations: [
        CadastroComponent,
        FormCadastroComponent,
        FormCadastroTecnicoComponent,
    ],
    providers: [AppHttpService],
    exports: [FormCadastroTecnicoComponent]
})

export class CadastroModule {}
