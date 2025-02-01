/*
Escribir una función que retorna True si una matriz cuadrada es matriz diagonal 
y False en caso contrario.

Una matriz cuadrada diagonal es una matriz que tiene ceros en todos sus elementos, 
menos en la diagonal principal 
(No importan los elementos de la diagonal principal, pueden ser cero o no).

*/

function esDiagonalCuadrada(unaMatriz){
    

    for(let i = 0 ; i < unaMatriz.length ; i ++){
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){

            if(j != i){
                if(unaMatriz[i][j] !== 0){
                    
                    return(false);
                } 
                
            }
        }

        
    }

    return(true);
}
//Caso de prueba

let matrizDiagonalCuadrada = [[0,0,0],[0,0,0],[0,0,0]];

console.log(esDiagonalCuadrada(matrizDiagonalCuadrada));