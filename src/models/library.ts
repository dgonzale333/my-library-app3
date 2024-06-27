import { Book } from './book';

export class Biblioteca {
    libros: Book[] = [];

    agregarLibro(libro: Book): void {
        this.libros.push(libro);
    }

    buscarLibro(isbn: string): Book | undefined {
        return this.libros.find(libro => libro.isbn === isbn);
    }

    eliminarLibro(isbn: string): boolean {
        const indice = this.libros.findIndex(libro => libro.isbn === isbn);
        if (indice !== -1) {
            this.libros.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarLibros(): Book[] {
        return this.libros;
    }
}
