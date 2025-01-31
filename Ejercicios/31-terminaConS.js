/*
Escribir una función llamada terminanConSque reciba un arreglo de cuerdas y
retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

*/

function terminanConS(unArray){

    let palabrasConS = [];
    

    for(let i = 0 ; i < unArray.length ; i ++){

        if(unArray[i][unArray[i].length-1] === "s" || unArray[i][unArray[i].length-1] === "S" ){

            palabrasConS.push(unArray[i]);
        }
    }
    return(palabrasConS);
}

function terminanConS2(unArray){

    let palabrasConS = unArray.filter(p => p.endsWith("s") || p.endsWith("S") );

    return(palabrasConS);
}

// escribe tu función acá

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

// escribe tu función acá

// código de prueba
console.log(terminanConS2(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS2(["beta", "delta", "gama"])) // []
console.log(terminanConS2([])) // []