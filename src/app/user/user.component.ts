import { User } from './../models/user';
import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './user.component.html',
})
export class UserComponent {

    @Input()
    public users: User[] = [];
}