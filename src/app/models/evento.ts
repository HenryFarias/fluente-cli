import { Cidade } from './cidade';
import { Endereco } from './endereco';
import { User } from './user';
import { Assunto } from './assunto';
import { Nivel } from './nivel';

export class Evento {

    public id: number;
    public name: string;
    public local: string;
    public publico_ou_privado: string;
    public data: Date;
    public duracao: string;
    public descricao: string;
    public cidade: Cidade;
    public user: User;
    public assunto: Assunto;
    public nivel: Nivel;

    constructor() {
        this.cidade = new Cidade();
        this.user = new User();
        this.assunto = new Assunto();
        this.nivel = new Nivel();
    }
}