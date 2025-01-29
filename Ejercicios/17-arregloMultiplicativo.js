/*
Escribir una función llamada multiplicarArregloque reciba un arreglo de números 
y retorne la multiplicación de todos los elementos.
*/


function multiplicarArreglo(unArray){

    let multi = 1;

    for(let i =0 ; i < unArray.length ; i ++){
        multi = multi * unArray[i];
    }

    return(multi);
}

// escribe tu respuesta acá

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1