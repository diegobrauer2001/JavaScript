/*
Escribir una función llamada capitalizarque reciba una cadena y mayúscula la primera letra de cada palabra :


*/
function capitalizarUnaPalabra(str){

    let resto = str.slice(1);
    let primerLetra = str.charAt(0).toUpperCase();
    return (primerLetra + resto + " ");
    
    
}

function capitalizar(str){
    let arrAux = str.split(" ");
    let stringAux = "";

    for(let i = 0 ; i < arrAux.length ; i++){
        let cadenaCapitalizada = capitalizarUnaPalabra(arrAux[i]);
        stringAux = stringAux + cadenaCapitalizada;
    }
    return(stringAux);
}

// escribe tu función acá

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""