/*
Escribir una función llamada imprimirMatrizque reciba una matriz (un arreglo de arreglos) 
e imprima todos los elementos del arreglo.

*/


function imprimirMatriz(unaMatriz){

    for(let i = 0 ; i < unaMatriz.length ; i ++){

        for(let j = 0 ; j < unaMatriz[i].length ; j ++){

            console.log(unaMatriz[i][j]);

        }
    }
    
}

// escribe tu función acá

// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9