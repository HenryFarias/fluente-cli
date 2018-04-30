import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PickerBootstrapComponent} from './pickerBootstrap.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        PickerBootstrapComponent,
    ],
    exports: [
        PickerBootstrapComponent,
    ]
})

export class PickerBootstrapModule {}
