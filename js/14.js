//Arreglos o Arrays: sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10, 20, 30, 40, 50]; //los arrays se crean con corchetes

console.log(numeros);

console.table(numeros);//una buena forma de ver los arreglos es con table

//tambien se pueden crear con el constructor, menos utilizados

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

console.log(meses);

console.table(meses);

//los arreglos pueden contener todos tipos de datos

const arreglo = ['Hola', 10, true, "si", null, { nombre: 'Nahuel', Trabajo: 'Programador' }, [1, 2, 3]];

console.log(arreglo);
console.table(arreglo);

//Acceder a los valores de un arreglo. Se realiza a traves del indice

console.log(numeros[4]); //me devuelve el valor del indice 4, 50 en este caso. 
console.log(numeros[400]); //undefined, devuelve cuando no esta el indice

//Conocer la extencion de un arrays
console.log(meses.length);

const mes = [];//arrays vacio

console.log(mes.length);//devuelve 0

//Una Forma de iterar/recorrer cada dato de los arrays

numeros.forEach(function (numero) {
    console.log(numero);
});




