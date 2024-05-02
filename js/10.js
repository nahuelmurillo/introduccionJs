//Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponibles = true;

//Definir objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

console.log(producto);

//Ver las propiedades o nombre del objeto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponibles);

//otra forma menos usada
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponibles"]);

