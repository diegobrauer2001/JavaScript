/*

Escribir una función llamada removerCerosque reciba un arreglo de números 
y retorne un nuevo arreglo excluyendo los ceros (0).


*/

function removerCeros(unArray){

    let nuevoArray = unArray.filter(p => p != 0);

    return(nuevoArray);
}

// escribe tu respuesta acá

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []