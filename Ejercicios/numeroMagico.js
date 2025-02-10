/*
Ejercicio 1: Números felices

Un número se considera feliz si, al reemplazarlo repetidamente por la suma de los cuadrados de sus dígitos, eventualmente llega al número 1. Si entra en un ciclo infinito, no es un número feliz.

Ejemplo:

    19 → 1² + 9² = 1 + 81 = 82
    82 → 8² + 2² = 64 + 4 = 68
    68 → 6² + 8² = 36 + 64 = 100
    100 → 1² + 0² + 0² = 1 (es feliz)

Instrucciones:
Escribe una función es_feliz(n: int) -> bool que determine si un número es feliz o no.


*/

function esNumeroFeliz(n){
    let numStr = String(n);
    const arr = [];
    let sum = 0;

    for(let i = 0 ; i < numStr.length ; i++){
        let newElement = +numStr[i];
        arr.push(newElement);

    }

    arr.forEach((value, index) => {
        arr[index] = value ** 2;
    });


    for(let j = 0 ; j < arr.length ; j ++){
        sum  += arr[j];
    }
    console.log(arr);
    if(sum === 1){
        return true;
    }else{
        return false;
    }
}


console.log(esNumeroFeliz(120))
console.log(esNumeroFeliz(100))


