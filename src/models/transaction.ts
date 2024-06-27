import { Book } from './book';
import { Biblioteca } from './library';

export class Transacciones {
    static aplicarDescuento(libro: Book, descuento: number): number {
        return libro.precio - (libro.precio * descuento / 100);
    }

}
