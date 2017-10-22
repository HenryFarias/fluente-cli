import { User } from './../models/user';
import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './gridUsers.component.html',
    selector: 'seguidores',
})
export class GridUsersComponent {

    @Input()
    public users: User[] = [];
}