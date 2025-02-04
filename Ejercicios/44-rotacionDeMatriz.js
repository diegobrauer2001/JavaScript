/*
Escribe una función que reciba 
una matriz cuadrada y la rote 90° en sentido horario.
*/

function rotarMatriz(unaMatriz){

    let matrizRotada = [];
    let filas = unaMatriz.length;
    let columnas = unaMatriz[0].length;
    let indice = 0;

    for(let i = 0 ; i < filas ; i++){
        matrizRotada.push([]);
    }
    for(let j = 0 ; j < columnas  ; j++ ){
        for(let i = filas -1 ; i >= 0 ; i-- ){
            matrizRotada[j].push(unaMatriz[i][j]);
            indice += 1 ;
        }

        

    }
    return(matrizRotada);
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotarMatriz(matriz));

/**
 

[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

 */

