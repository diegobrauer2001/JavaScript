/*
Escribir una función llamada minque reciba un arreglo de números y retorne el número mínimo:

Nota: Intente hacer sin el método Math.minde JavaScript.

*/

function min(unArray){

    let minimo = unArray[0];

    for(let i = 0 ; i < unArray.length ; i++){
        if(minimo >= unArray[i]){

            minimo = unArray[i];
        }
    }

    return(minimo);

}

// escribe tu función acá

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2