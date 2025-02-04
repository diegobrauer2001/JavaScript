/*
Transponer una matriz

Dada una matriz, intercambia sus filas y columnas.

[[1, 2, 3],      
 [4, 5, 6],  
 [7, 8, 9]]     


*/

function transponerMatriz(unaMatriz){

    let filas = unaMatriz.length;
    let columnas = unaMatriz[0].length;
    let matrizTranspuesta = []

    
    for(let i = 0 ; i < columnas ; i ++){
        matrizTranspuesta.push([]);
    }

    for(let j = 0 ; j < columnas ; j ++){
        for(let i = 0 ; i < filas ; i ++){
            matrizTranspuesta[j].push(unaMatriz[i][j]);
        }
    }
    return(matrizTranspuesta);


}

let matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(transponerMatriz(matriz));

