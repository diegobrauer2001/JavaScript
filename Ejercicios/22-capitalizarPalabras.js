/*
Escribir una función llamada capitalizarque reciba una cadena y mayúscula la primera letra:
*/

function capitalizar(str){

    let resto = str.slice(1);
    let primerLetra = str.charAt(0).toUpperCase();
    return (primerLetra + resto);
    
    
}

// escribe tu función acá

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""