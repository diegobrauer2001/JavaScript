//Número par o impar: Crea una función que determina si un número es par o impar.

function esParOImpar(n){

    if(n%2 ===0 ){

        return("Es par");

    } else{

        return("Es impar");

    }
}

console.log(esParOImpar(12));
