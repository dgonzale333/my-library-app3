import { Book } from './book';

export class Biblioteca {
     libros: Book[] = [];

    agregarLibro(libro: Book): void {
        this.libros.push(libro);
    }

    buscarLibro(titulo: string): Book | undefined {
        return this.libros.find(libro => libro.titulo === titulo);
    }

    eliminarLibro(titulo: string): boolean {
        const indice = this.libros.findIndex(libro => libro.titulo === titulo);
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

