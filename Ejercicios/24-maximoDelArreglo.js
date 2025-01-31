/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intente hacer sin el método Math.maxde JavaScript.


*/

function max(unArray){

    let maximo = unArray[0];

    for(let i = 0 ; i < unArray.length ; i++){

        if(maximo < unArray[i]){
            maximo = unArray[i];
        }
    }
    return(maximo);
}

// escribe tu función acá

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9