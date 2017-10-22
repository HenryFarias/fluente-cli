import { UserComponent } from './user.component';
import { Routes } from '@angular/router';
import { GridUsersComponent } from './gridUsers.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

const appRoutes: Routes = [
    {path: 'usuario', children:[
        { path: 'edit/:id', component: UserComponent },
    ]}
];

@NgModule({
    imports: [
        BrowserModule,
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