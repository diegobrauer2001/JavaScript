/*
Escribir una función llamada contarRangoque reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utilice un ciclo en su solución. Puedes asumir que el primer número va a ser menor que el segundo.

*/


function contarRango(n,m){

    let contar = 0;
    for(let i = n ; i < m-1 ; i++){

        contar +=1 ;

    }

    return(contar);
}


// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0