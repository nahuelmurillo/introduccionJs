//Arreglos o Arrays: Mas Metodos 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }

];

//ForEach para listar los elementos de arrays

// meses.forEach(function(mes) {
//     console.log(mes);
// })

//Estructura de control


meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

//para simplicar se utiliza el metodo Includes, funciona bien en un arrays plano
let resultado = meses.includes('Marzo');
console.log(resultado);//devuelve true o false

//Some ideal para arreglos de objetos
resultado = carrito.some(function (producto) {
    return producto.nombre === 'Celular' //devuelve true o false
})
console.log(resultado);

//Reduce: Permite sumar los elementos del arrays
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);
console.log(resultado);

//Filter: permite selecionar los elementos del arrays segun la busqueda que necesitemos
resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log(resultado);

resultado = carrito.filter(function (producto) {
    return producto.nombre === 'Celular' // === igual !==distinto
});
console.log(resultado);

