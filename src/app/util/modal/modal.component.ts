import { Component, ElementRef, ViewChild, Input } from '@angular/core';

declare let $: any;

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @ViewChild('modal')
    public modal: ElementRef;

    @Input()
    public classe: string = "";

    open() {
        $(this.modal.nativeElement).modal({
            // keyboard: false,
            // backdrop: "static"
        });
    }

    close() {
        $(this.modal.nativeElement).modal('hide');
    }
}