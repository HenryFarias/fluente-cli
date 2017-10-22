import { Component, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

// https://github.com/kekeh/mydatepicker

@Component({
    selector: 'picker',
    templateUrl: './picker.component.html'
})
export class PickerComponent {

    @Input()
    public ngmodel;

    @Input()
    public name;

    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
        dayLabels: {su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sáb'},
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje',
    };  

}