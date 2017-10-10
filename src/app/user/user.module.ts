import { GridSeguidoresComponent } from './gridSeguidores.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        GridSeguidoresComponent,
    ],
    exports: [
        GridSeguidoresComponent
    ]
})

export class UserModule {}