/*
Escribir una función llamada duplicarque reciba un arreglo de números 
y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
*/

function duplicar(unArreglo){

    let arregloDuplicado = unArreglo.map(p => p *2);

    return(arregloDuplicado);

}


function duplicar2(unArreglo){
    let arregloDuplicado = [];

    for(let i = 0 ; i < unArreglo.length ; i++){

        arregloDuplicado.push(unArreglo[i] * 2);    
    }

    return(arregloDuplicado);

}


// escribe tu función acá

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

// escribe tu función acá

// código de prueba
console.log(duplicar2([1, 2, 3])) // [2, 4, 6]
console.log(duplicar2([])) // []