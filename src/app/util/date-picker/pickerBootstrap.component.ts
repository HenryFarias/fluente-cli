import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import {ValueAccessorBase} from '../value-acessor';

declare var $: any;

export const SLIDER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: PickerBootstrapComponent,
    multi: true
};

@Component({
    selector: 'fluente-picker-bootstrap',
    templateUrl: './pickerBootstrap.component.html',
    providers: [
        SLIDER_VALUE_ACCESSOR
    ]
})
export class PickerBootstrapComponent implements OnInit, ValueAccessorBase<any> {
    @ViewChild(NgModel) dadosEnvio: NgModel;

    handleInput(prop, value) {
        if(!this.value){
          this.value = new DadosEnvio();
        }
        this.value[prop] = value;
        this.value = { ...this.value };
    }


  ngOnInit(): void {
        this.traduzirDatePicker();

        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy',
            language: 'pt-BR',
            weekStart: 0,
            todayHighlight: true
        });
    }

    private traduzirDatePicker() {
        $.fn.datepicker.dates['pt-BR'] = {
            days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
            daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
            daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
            months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            today: "Hoje",
            clear: "Limpar"
        };
    }
}
