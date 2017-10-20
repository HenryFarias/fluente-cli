// import { SelectComponent } from './select.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

@NgModule({
    imports: [
        BrowserModule,
        AngularMultiSelectModule,
    ],
    declarations: [
        // SelectComponent,
    ],
    exports: [
        // SelectComponent,
    ]
})

export class SelectModule {}