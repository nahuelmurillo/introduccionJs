//Metodos de Arreglos o Arrays: agregar, eliminar, Modificar

const numeros = [10, 20, 30, 40, 50]; //los arrays se crean con corchetes

//agregar nuevo indice no utilizado
numeros[5] = 60;
numeros[6] = 70;
//si pisamos el indice modifica el elemento
numeros[6] = 80;

//Forma recomendada
numeros.push(90);//sin importar el numero de indices lo almacena al final de arrays
numeros.push(100);//sin importar el numero de indices lo almacena al final de arrays
numeros.push(110, 120, 130);//otra opcion de agregar para multiples elementos.
//Desventajas del .push que hoy en dia se recomienda no modificar los arreglos originales, no modificar los datos originales

//metodo unShift: agrega al inicio del arreglo los datos
numeros.unshift(-10, -20, -30);

console.table(numeros);//una buena forma de ver los arreglos es con table

//Eliminar elementos del arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

meses.pop();//elimina el ultimo elemento del array
meses.shift();//elimina el primer elemento del array
meses.splice(2, 1);//elimina el valor segun el indice que se le pasa. Toma 2 valores: el pimero el elemento del 
//arrays que va a eliminar segun su indice y el segundo es cuanto quieres eliminar a partir de ahi

console.table(meses);

//mismas deventajas que el .push

//lo indicado es utilizar el metodo REST OPERATOR O SPREAR OPERATOR
const nuevoArreglo = [...meses, 'Agosto'];//mantiene los datos originales en un nuevo arreglo e inserta al final
const nuevoArreglo1 = ['Agosto', ...meses];//mantiene los datos originales en un nuevo arreglo e inserta al inicio

console.table(nuevoArreglo);
console.table(nuevoArreglo1);




