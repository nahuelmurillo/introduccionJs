//Diferencias entre el tipo de funciones

//Declaracion de la funcion

sumar();
function sumar() {
    console.log(10 + 10);
};



//Expesion de la funcion

sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}


//la diferencias entre estas funciones es el hosting, JS se ejecuta en dos vueltas conocido como el hosting. En la primera se registran todas la funciones, etapa conocida como de creacion y luego los llamados a las funciones, conocida como ejecucion.
//En el caso uno funciona ya que primero registra y luego llama a pesar de estar antes de la funcion.
//En la segunda no funciona porque si bien es una funcion no esta declarada como tal, sino como una variable.  


