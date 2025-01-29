/*
Escribir una función llamada 
sumarArregloque reciba un arreglo de números y retorne la suma de todos los elementos.
*/

function sumarArreglo(unArray){

    let suma = 0;

    for(let i = 0 ; i < unArray.length ; i++ ){

        suma = suma + unArray[i];
    }
    return(suma);
}

// escribe tu respuesta acá

// código de prueba

let arr = [3, 1, 2]
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0