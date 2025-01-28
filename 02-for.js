/*
El for es un bloque de comando que permite iterar sobre una estructura de datos como array,etc.


*/
const frutas = ["manzana","banana","pera"];
const numeros = [10,20,30,50]

let contar = 0;


// Esta es la forma tradicional de for

for(let i = 0; i < 10; i++){
contar += 1;
console.log(contar);


}
// Esta es la forma tradicional de recorrer una arreglo con for 
for(let i = 0 ; i < frutas.length ; i++){

    console.log(frutas[i]);
    
}


//Esta es una forma mas facil y moderna de recorrer los elementos de un arreglo
for( let numero of numeros){

    console.log(numero);
    

}

//Esta  tambien es una forma mas facil de recorrer los indices de un arreglo
for(let indice in frutas){

    console.log(`Índice: ${indice}, Valor: ${frutas[indice]}`);
    
}