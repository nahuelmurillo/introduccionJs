//Funciones que retornan valores

function sumar(n1, n2) {
  return n1 + n2; //retorna el resultado, a diferencia de mostrarlo 
}

const resultado = sumar(2, 4);//se debe almacenar en una variable y con el console.log vemos en resultado en pantalla
console.log(resultado);

//ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
  return total += precio; //+=para ir sumando
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es: $${totalAPagar}`);//concatenar string con resultado