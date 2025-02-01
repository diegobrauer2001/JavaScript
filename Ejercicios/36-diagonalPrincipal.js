/* 


Desarrollar una función que recibe una matriz cuadrada de números reales (N x N) por parámetro y calcula 
la suma de los elementos que están por encima de la diagonal principal (excluyendo la diagonal).
*/



function sumaDiagonal(unaMatriz){

    let sumaDiagonal = 0;

    for(let i = 0 ; i < unaMatriz.length ; i ++){

        for(let j = 0 ; j < unaMatriz[i].length ; j++){

            if( j === i ){
                sumaDiagonal = sumaDiagonal + unaMatriz[i][j];
            }

        }
    }
    return(sumaDiagonal);
}

//Caso de prueba

let matriz =[[1,2,3],[4,5,6],[7,8,9]];

console.log(sumaDiagonal(matriz));