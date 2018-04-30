import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';

const noop = () => {
};

declare var $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PickerBootstrapComponent),
    multi: true
};

@Component({
    selector: 'picker',
    templateUrl: './pickerBootstrap.component.html',
    providers: [
        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
    ]
})
export class PickerBootstrapComponent implements OnInit, ControlValueAccessor {

    private innerValue: any = '';

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    ngOnInit(): void {
        this.traduzirDatePicker();

        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy',
            language: 'pt-BR',
            weekStart: 0,
            todayHighlight: true
        });
    }

    get value(): any {
        return this.innerValue;
    }

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
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
