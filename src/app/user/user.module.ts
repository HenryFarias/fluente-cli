import { UserComponent } from './user.component';
import { Routes } from '@angular/router';
import { GridUsersComponent } from './gridUsers.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from '../util/alert/alert.module';
import { MapsModule } from '../maps/maps.module';
import { FormsModule } from '@angular/forms';
import {Security} from '../security/security';

const appRoutes: Routes = [
    {
        path: 'usuario',
        canActivateChild: [Security],
        children: [{
            path: 'edit/:id', component: UserComponent
        }]
    }
];

@NgModule({
    imports: [
        BrowserModule,
        AlertModule,
        MapsModule,
        FormsModule,
    ],
    declarations: [
        GridUsersComponent,
        UserComponent,
    ],
    exports: [
        GridUsersComponent,
    ]
})

export class UserModule {}
