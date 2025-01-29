/*
Escribir una función llamada sumarRangoque reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

*/

function sumarRango(n,m){

    let suma =0;

    if(n === m ){
        return (suma);
    } else{

        for(let i = n ; i <= m ; i++){
            suma = suma + i ;
    
        }
    }

    return(suma);

}

// escribe tu respuesta acá

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0