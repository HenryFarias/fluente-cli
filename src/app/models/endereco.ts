import { Cidade } from './cidade';

export class Endereco {

    public id: number;
    public cidade: Cidade;
    public latitude: number;
    public longitude: number;

    constructor() {
        this.cidade = new Cidade();
    }
}