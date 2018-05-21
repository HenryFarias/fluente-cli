import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppHttpService} from '../app/app-http.service';
import {LoginComponent} from './login.component';
import {PerfilComponent} from './perfil.component';
import {FormLoginComponent} from './formLogin.component';
import {LayoutModule} from '../layout/layout.module';
import {AlertModule} from '../util/alert/alert.module';


const appRoutes: Routes = [
    {
        path: 'login',
        children: [{
            path: '', component: LoginComponent
        }]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LayoutModule,
        AlertModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        PerfilComponent,
        FormLoginComponent,
    ],
    providers: [AppHttpService],
    exports: [FormLoginComponent]
})
export class LoginModule {}
