import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class EmitUser {

    static emitirUser = new EventEmitter<User>();

    public setUser(user: User) {
        EmitUser.emitirUser.emit(user);
    }
}

