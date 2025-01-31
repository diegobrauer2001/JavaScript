/*
Escribir una función llamada numAsteriscosque 
reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

*/


function numAsteriscos(unaMatriz){

    let contador = 0; 

    for(let i = 0 ; i < unaMatriz.length ; i++){
        
        for( let j = 0 ; j < unaMatriz[i].length ; j++){
            if(unaMatriz[i][j]==="*"){
                contador += 1;
            }
        }
    }

    return(contador);
}


// escribe tu función acá

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
]))
  // 5