/*

Los array es una estructura de datos que perminten almacenar varios tipos de datos en su interior como una lista
la cual en mutable tanto en sus elementos como en su tamano 
Metodos para manipular arrays:

push() -- > Agrega uno o mas elementos al final del array.
pop() --> Elimina el ultimo elemento del array.
shift() --> Elimina el primer elemento de un array.
unshift() --> Agrega uno o mas elementos al principio del array.
slice() --> Hace una copia de los elementos en un rango con sus indices.
concat() --> concatena uno o mas arrays .
indexOf() --> Recive un elemento y devuelve el indice de la primera siumilitud.
map() --> Aplica una funcion a cada elemento del array.
filter() --> Devuelve un array con los elementos que cumplan una condicion.


*/



const numeros = [ 1,2,3];

// push()

numeros.push(4,5);

console.log(numeros);

//pop()

const vocales = ["a","e","i","o","u"];
vocales.pop();
console.log(vocales);

//shift()

const pares = [4,6,8,10];
pares.shift()
console.log(pares);

//unshift()

const letras = ["b","c"];
letras.unshift("a");
console.log(letras);

//slice()


const num = [1,2,3,4,5,6,7];
var num2=num.slice(2)
console.log(num2)


//indexOf()

const frutas = ["manzana","banana","pera"];
var indiceBanana = frutas.indexOf("banana");
console.log(indiceBanana);

//map()

var suma = numeros.map(p => p + 2);
console.log(suma);

//filter()

var paresMayores = pares.filter(p => p > 6);
console.log(paresMayores)

// length

console.log(frutas.length);
