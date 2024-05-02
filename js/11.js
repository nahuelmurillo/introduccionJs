//Destructuring de Objetos

//Definir objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

//Manera anterior: selecciona el objeto y crea una variable
const precioProducto = producto.nombreProducto;
const precioPrecio = producto.precio;
const precioDisponible = producto.disponibles;

console.log(precioProducto);
console.log(precioPrecio);
console.log(precioDisponible);

//Destructuring

//const {precio} = producto; //de forma individual
const { nombreProducto, precio, disponibles } = producto; //de forma grupal


console.log(nombreProducto);
console.log(precio);
console.log(disponibles);
