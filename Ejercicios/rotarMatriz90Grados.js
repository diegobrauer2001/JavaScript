/*
Rotar una matriz 90° en sentido antihorario

Similar al ejercicio que hiciste antes, pero en el sentido contrario.

1 2 3           3 6 9
4 5 6     =>    2 5 8
7 8 9           1 4 7 

*/

function invertirAntihorario(unaMatriz){

    let columnas = unaMatriz[0].length;
    let filas = unaMatriz.length;
    let matrizInvertida = [];
    let indice = -1

    for(let i = 0 ; i < columnas ; i ++){
        matrizInvertida.push([]);

        
    }

    for(let j = columnas -1 ; j >= 0 ; j--){
        indice += 1
        for(let i = 0 ; i < filas ; i ++){

            matrizInvertida[indice].push(unaMatriz[i][j]);
            
        }
    }
    return(matrizInvertida);
}


let matriz = [[1,2,3],[4,5,6],[7,8,9]];

console.log(invertirAntihorario(matriz));