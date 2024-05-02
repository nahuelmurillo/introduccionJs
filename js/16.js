//Funciones: son series de procedimientos o instrucciones que realizan una acción
//una ventaja de las funciones es que te permiten tener un codigo mas ordenado y facil de mantener,
//ademas son reutilizables: Ej puedes tener una funcion que valide tu formulario y utilizarla en todos los
//formularios.
//Existen 3 formas de crear funciones: declaracion de la funcion, expresion de la funcion e IIFE

//Declaracion de la funcion

function sumar() { //dentro del () se coloca el argumento
    console.log(10 + 10);
}; //dentro de las llaves es lo que pertenece a la funcion

sumar(); //llamando a la funcion

//Expesion de la funcion

const sumar2 = function () {
    console.log(3 + 3);
}

sumar2(); //llamando a la funcion

//IIFE: son funciones que no necesitan llamarse xq se llaman asi misma, no se recomienda mucho para reutilizarse,sirven para proteger las variables que no se mezclen con otro archivo

(function () {
    console.log('Esto es una funcion')
})(); //()al final llama a la funcion

