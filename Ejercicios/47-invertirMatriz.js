/*
Reflejar una matriz horizontalmente

Dada una matriz, invierte sus filas (de modo que la última fila pase a ser la primera y viceversa).


*/

function invertirMatriz(unaMatriz){ 
    let matrizInvertida = [];
    let indice = -1 ;

    for(let i = 0 ; i < unaMatriz.length ; i ++ ){
        matrizInvertida.push([]);
    }

    for(let i = unaMatriz.length -1 ; i >=0 ; i --){
        indice += 1
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){
            matrizInvertida[indice].push(unaMatriz[i][j]);
        }

    }

    return(matrizInvertida);
}

let matriz = [[1,2,3],[4,5,6],[7,8,9]]; // [[7,8,9],[4,5,6],[1,2,3]]

console.log(invertirMatriz(matriz));