/*
Escribe una función que reciba una matriz y 
devuelva su transpuesta. La transposición de una matriz 
consiste en intercambiar sus filas y columnas.



*/

function matrizTranspuesta(unaMatriz){
    let matrizT = [];
    for(let i = 0 ; i < unaMatriz.length ; i ++){
        matrizT.push([]);
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){
            matrizT[j].push(unaMatriz[i][j]);
        }
    }
}

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrizTranspuesta(matriz));
// Resultado esperado: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
