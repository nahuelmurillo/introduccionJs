//Object Methods
//"use strict"; //Ejecuta el codigo de JS de forma estricta que debe de seguir las buenas practicas

//Definir objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

Object.freeze(producto); //no permite agregar,modificar o eliminar nuevas propiedades y tampoco modificar los objetos

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto)); //Comando para verificar si esta Frezado, devuelve true

//------------------------------------------------------------------------------------------


Object.seal(producto); //no permite agregar o eliminar pero "si modificar" propiedades

producto.precio = 'Nuevo Precio';

console.log(Object.isSealed(producto)); //Comando para verificar si esta Seal, devuelve true

console.log(producto);
