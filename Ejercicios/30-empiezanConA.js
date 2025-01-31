/*
Escribir una función llamada empiezanConAque reciba un arreglo de cuerdas y 
retorne un nuevo arreglo con todas las palabras que comiencen por "a" (mayúscula o minúscula).


*/

function empiezanConA(unArray){

    let palabrasQueEmpiezaConA = unArray.filter(p=>p.startsWith("a") || p.startsWith("A") );
    return(palabrasQueEmpiezaConA);

}

function empiezanConA2(unArray){

    let palabrasConA = [];

    for(let i = 0 ; i < unArray.length ; i ++){

        if(unArray[i][0] === "a" || unArray[i][0] === "A"){

            palabrasConA.push(unArray[i]);
        }

    }
    return(palabrasConA);
}

// escribe tu función acá

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

// escribe tu función acá

// código de prueba
console.log(empiezanConA2(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA2(["beta", "delta", "gama"])) // []
console.log(empiezanConA2([])) // []