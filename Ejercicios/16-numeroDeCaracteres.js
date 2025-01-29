/*
Escribir una función llamada numeroDeCaracteresque reciba una cadena y un carácter (un string de un caracter).
La función debe devolver el número de veces que aparece el carácter en la cadena.
*/

function numeroDeCaracteres(unaCadena,unCaracter){
    let conatdor = 0;
    for(let i = 0 ; i <= unaCadena.length ; i ++){
        if(unaCadena[i] === unCaracter){
            conatdor +=1;
        }
    }
    return(conatdor);
}

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4