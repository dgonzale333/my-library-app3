import { Book } from './book';
import { Biblioteca } from './library';

export class Transacciones {
    static aplicarDescuento(libro: Book, descuento: number): number {
        return libro.precio - (libro.precio * descuento / 100);
    }

    static venderLibro(biblioteca: Biblioteca, isbn: string): boolean {
        const libro = biblioteca.buscarLibro(isbn);
        if (libro) {
            biblioteca.eliminarLibro(isbn);
            console.log(`Libro vendido: ${libro.titulo}`);
            return true;
        }
        console.log(`Libro con ISBN ${isbn} no encontrado.`);
        return false;
    }
}

