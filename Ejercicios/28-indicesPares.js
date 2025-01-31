/*
Escribir una función llamada posicionesque reciba un arreglo de números y 
retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

*/

function posiciones(unArreglo){

    let posicionesPares = [];
    for(let i = 0 ; i < unArreglo.length ; i++){
        
        if(unArreglo[i] % 2 ===0){
            posicionesPares.push(i);
        }

    }
    return(posicionesPares);
}


// escribe tu función acá

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []