/*
Escribe una función que recibe dos matrices de igual tamaño 
y retorna una nueva matriz con la suma de sus elementos correspondientes.
*/

function sumarMatrices(unaMatriz,otraMatriz){

    let matrizSuma =[[],[],[]];


    for(let i = 0 ; i < unaMatriz.length ; i ++){
        for(let j = 0 ; j < unaMatriz[i].length ; j ++){
            let suma = unaMatriz[i][j] + otraMatriz[i][j];
            matrizSuma[i].push(suma);
        }
    }
    return(matrizSuma);
}

let matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
console.log(sumarMatrices(matriz1, matriz2));
// Resultado esperado: [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
