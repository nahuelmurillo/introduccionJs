//Unir dos objetos con el Spread Operator


//Definir objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponibles: true,
}

const medidas = {
    peso: '1 kg',
    medida: '1 m',
}

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto)