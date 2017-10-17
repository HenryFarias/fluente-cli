import { Evento } from './../models/evento';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitEventos {

    static emitirEventos = new EventEmitter();

    public setEventos(evento: Evento) {
        console.log(evento);
        EmitEventos.emitirEventos.emit(evento);
    }
}

