/*
Escribir una función llamada numeroDeAesque reciba una cadena y regrese el número de veces que aparece la letra "a":

*/

function numeroDeAes(str){

    let contar = 0;

    for(let i = 0; i< str.length ; i++){

        if(str[i] === "a"){
            contar +=1;
        }

    }
    return(contar);
}

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0