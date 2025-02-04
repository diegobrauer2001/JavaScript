/*
Escribe una función que reciba una matriz y devuelva el valor máximo de todos sus elementos.


*/

function buscarMaximo(unaMatriz){
    let maximo = unaMatriz[0][0];
    for(let i = 0 ; i < unaMatriz.length ; i ++){
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){
            
            if(maximo <= unaMatriz[i][j]){

                maximo = unaMatriz[i][j];

            }
        }
    }
    return(maximo);
}

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(buscarMaximo(matriz));
// Resultado esperado: 9
