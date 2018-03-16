import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PickerBootstrapComponent} from './pickerBootstrap.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        PickerBootstrapComponent,
    ],
    exports: [
      PickerBootstrapComponent,
    ]
})

export class PickerBootstrapModule {}
