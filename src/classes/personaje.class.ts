export const NOMBRE = 'Diego';

export class Personaje {

    constructor(
        public nombre: string,
        public epoca: string,
        public arma: string,
        public nacimiento: Date
    ){}

    viajar(){
         console.log(`${this.nombre} viajo a su epoca, año ${this.epoca}`)   
    }
}