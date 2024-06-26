export class Book {
    constructor(
        public titulo: string,
        public autor: string,
        public genero: string,
        public precio: number,
        public formato: string,
        public isbn: string,
        public descripcion: string,
        public publicacion: Date,
    ) {}
}
