/*
Ejercicio 3: Ordenación extraña

Dado un arreglo de números enteros, ordénalo de manera que los números pares vayan al principio en orden ascendente y los impares al final en orden descendente.

Ejemplo:

entrada = [5, 3, 2, 8, 1, 4]  
salida = [2, 4, 8, 5, 3, 1]

Instrucciones:
Escribe una función ordenacion_extraña(arr: list) -> list que implemente este ordenamiento.
*/

function ordenacionExtraña(arr){
    const par = ordenamientoPar(arr);
    const impar = ordenamientoImpar(arr);
    const arrayOrdenado = par.concat(impar);
    return arrayOrdenado;
    
}

function ordenamientoPar(arr){
    const arrayPar = [];
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            arrayPar.push(arr[i]);
        }
    }
    
   arrayPar.sort((a,b) => a - b);

    return arrayPar;
}

function ordenamientoImpar(arr){
    const arrayImpar = [];
    
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] % 2 != 0){
            arrayImpar.push(arr[i]);
        }
    }

    arrayImpar.sort((a,b) => b - a);
    
    return arrayImpar;
}
let array = [5, 3, 2, 8, 1, 4]

console.log(ordenacionExtraña(array));