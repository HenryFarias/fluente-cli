import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {

    private url: string;

    constructor(private http: Http) {}

    builder (resource: string) {
        this.url = 'http://localhost/arquitetura-rest/public/' + resource;
        return this;
    }

    list() {
        const url = this.url;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    view(id: number) {
        const url = this.url + '/' + id;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    update(id: number, data: any) {
        const url = this.url + '/' + id;

        return this.http.put(url, data).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    save(data: any) {
        const url = this.url;

        return this.http.post(url, data).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    create() {
        const url = this.url + '/create';

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    getAll() {
        const url = this.url;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }

    remove(id: number) {
        const url = this.url + '/' + id;

        return this.http.delete(url).toPromise().then((res) => {
            return res.json() || {};
        });
    }
}

