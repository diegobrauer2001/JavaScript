/*
Buscar el número más grande de cada fila

Dada una matriz, devuelve una matriz con el número más grande de cada fila.
*/

function max(unArray){
    let maximo = unArray[0];
    for(let i = 0 ; i < unArray.length ; i ++){
        if(maximo < unArray[i]){
            maximo = unArray[i];
        }
    }
    return(maximo);
}

function maximoPorFila(unaMatriz){
    let maximos = []; // Guarda todos los maximos de cada fila 

    for(let i = 0 ; i < unaMatriz.length ; i ++){
            maximos.push(max(unaMatriz[i]));
        }
        return(maximos);
    }

let matriz = [[1,4,5,9],[10,60,50,15],[2,0,0,5],[8,2,3,4]]; // [9,60,5,8]

console.log(maximoPorFila(matriz));