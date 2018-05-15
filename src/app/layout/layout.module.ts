import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import {Security} from '../security/security';


const appRoutes: Routes = [
    { path: '' , component: HeaderComponent, canActivateChild: [Security], outlet: 'header'},
    { path: '' , component: FooterComponent, canActivateChild: [Security], outlet: 'footer'}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ]
})

export class LayoutModule {}
