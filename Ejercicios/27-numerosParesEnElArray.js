/*
Escribir una función llamada paresque reciba un arreglo de números 
y retorne un nuevo arreglo con los números pares únicamente.
*/


function pares(arreglo){

    let arregloPares = arreglo.filter(p=>p % 2 === 0);

    return(arregloPares);

}



// escribe tu función acá

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []