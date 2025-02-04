/*
Escribe una función que reciba una matriz y cuente cuántos ceros contiene.

Ejemplo:
*/

function contarCeros(unaMatriz){
    let contar = 0; 
    for(let i = 0 ; i < unaMatriz.length ; i ++){
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){
            if(unaMatriz[i][j] === 0){
                contar += 1;
            }
        }
    }
    return(contar);

}


let matriz = [[1, 0, 3], [4, 0, 6], [0, 8, 9]];
console.log(contarCeros(matriz));
// Resultado esperado: 3
