/*
Escribir una función llamada numAsteriscosque reciba un arreglo y devuelva el número de asteriscos:

*/

function numAsteriscos(unArray){

    let contador = 0;

    for(let i = 0 ; i < unArray.length ; i ++){
        for(let j = 0 ; j < unArray[i].length ; j ++){
            if(unArray[i][j] === "*"){
                contador += 1;
            }
        }
    }
    return(contador);
}
// escribe tu función acá

// código de prueba
console.log(numAsteriscos(['*', '**', '***', '****'])) // 10
console.log(numAsteriscos(['*', '**', '*'])) // 4
console.log(numAsteriscos([])) // 0