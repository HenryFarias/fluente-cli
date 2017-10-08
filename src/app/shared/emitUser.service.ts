import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmitUser {

    static emitirUser = new EventEmitter<User>();

    constructor() {

    }

    public setUser(user: User) {
        EmitUser.emitirUser.emit(user);
    }
}

