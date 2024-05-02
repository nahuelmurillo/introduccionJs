//Orden de las Operaciones
let resultado;

resultado = 20 + 10 * 2; //40
resultado = (20 + 10) * 2; //60
resultado = (100 + 200 + 300) * .2; //120 = al 20% Ejemplo de un carrito de compras con un 20% de descuento
resultado = (100 + 200 + 300) * .21; //126 = al 21% de impuesto

console.log(resultado);

//Incrementos

let puntaje = 10;

//Incremento en 1
puntaje++; //11
++puntaje; //12

console.log(puntaje);

// console.log(puntaje++);//sigue en 10 pero con console.log imprime 11
// console.log(puntaje);//11

//console.log(++puntaje); //primero suma y luego muestra el valor sumado 11

//Disminucion en 1
let disminucion = 10;

disminucion--; //9
--disminucion; //8

console.log(disminucion);

//Incremento con otro valor
let otroValor = 10;

otroValor += 10; //20 incrementa con el valor especificado no de 1 en 1


console.log(otroValor);