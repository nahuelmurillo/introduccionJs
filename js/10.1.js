//Definir objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

//agregar nuevas propiedades

producto.imagen = 'imagen.jpg';

//eliminar propiedades
delete producto.disponibles;

console.log(producto);


