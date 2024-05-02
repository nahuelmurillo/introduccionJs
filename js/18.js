//Funciones con parametros y argumentos

//Declaracion de la funcion

function sumar(numero1 = 0, numero2 = 0) { //() se colocan los parametros -- =0 se asigna para tener un valor por default en caso de estar vacio la variable
  console.log(numero1 + numero2);
}
sumar(10, 10); //()se colocan los argumentos o los valores reales
sumar(5, 5);
sumar(2, 3);
sumar(4, 6);//son reutilizables
sumar(1);
sumar();
//Expesion de la funcion

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};
sumar2(10, 5);
