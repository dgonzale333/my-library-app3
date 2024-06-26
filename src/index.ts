import { Book } from '../src/models/book';
import { Biblioteca } from '../src/models/library';
import { Transacciones } from '../src/models/transaction';
import * as readline from 'readline';

const biblioteca = new Biblioteca();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal(): void {
    console.log(`\nMenú de la Biblioteca:
    1. Insertar Libro
    2. Buscar Libro
    3. Eliminar Libro
    4. Listar Libros
    5. Aplicar Descuento
    6. Vender Libro
    0. Salir`);
    rl.question('Escoge una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                insertarLibro();
                break;
            case '2':
                buscarLibro();
                break;
            case '3':
                eliminarLibro();
                break;
            case '4':
                listarLibros();
                break;
            case '5':
                aplicarDescuento();
                break;
            case '6':
                venderLibro();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Opción inválida.');
                menuPrincipal();
                break;
        }
    });
}

function insertarLibro(): void {
    rl.question('Ingrese el título del libro: ', (titulo) => {
        rl.question('Ingrese el autor del libro: ', (autor) => {
            rl.question('Ingrese el género del libro: ', (genero) => {
                rl.question('Ingrese el precio del libro: ', (precio) => {
                    rl.question('Ingrese el formato del libro: ', (formato) => {
                        rl.question('Ingrese el ISBN del libro: ', (isbn) => {
                            rl.question('Ingrese la descripción del libro: ', (descripcion) => {
                                rl.question('Ingrese la fecha de publicación del libro (YYYY-MM-DD): ', (fechaPublicacion) => {
                                    const libro = new Book(
                                        titulo,
                                        autor,
                                        genero,
                                        parseFloat(precio),
                                        formato,
                                        isbn,
                                        descripcion,
                                        new Date(fechaPublicacion)
                                    );
                                    biblioteca.agregarLibro(libro);
                                    console.log(`Libro añadido: ${libro.titulo}`);
                                    menuPrincipal();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}






function buscarLibro(): void {
    rl.question('Ingrese el Titulo del libro a buscar: ', (titulo) => {
        const libro = biblioteca.buscarLibro(titulo);
        if (libro) {
            console.log(`Libro encontrado: ${libro.titulo}`);
        } else {
            console.log('Libro no encontrado.');
        }
        menuPrincipal();
    });
}

function eliminarLibro(): void {
    rl.question('Ingrese el ISBN del libro a eliminar: ', (titulo) => {
        if (biblioteca.eliminarLibro(titulo)) {
            console.log('Libro eliminado.');
        } else {
            console.log('Libro no encontrado.');
        }
        menuPrincipal();
    });
}

function listarLibros(): void {
    const libros = biblioteca.listarLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la biblioteca.');
    } else {
        libros.forEach(libro => console.log(libro));
    }
    menuPrincipal();
}

function aplicarDescuento(): void {
    rl.question('Ingrese el ISBN del libro al que desea aplicar un descuento: ', (isbn) => {
        const libro = biblioteca.buscarLibro(isbn);
        if (libro) {
            rl.question('Ingrese el porcentaje de descuento: ', (descuento) => {
                const precioConDescuento = Transacciones.aplicarDescuento(libro, parseFloat(descuento));
                console.log(`Precio con descuento: $${precioConDescuento}`);
                menuPrincipal();
            });
        } else {
            console.log('Libro no encontrado.');
            menuPrincipal();
        }
    });
}

function venderLibro(): void {
    rl.question('Ingrese el ISBN del libro a vender: ', (isbn) => {
        Transacciones.venderLibro(biblioteca, isbn);
        menuPrincipal();
    });
}

menuPrincipal();