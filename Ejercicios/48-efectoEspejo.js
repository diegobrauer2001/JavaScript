/*
Reflejar una matriz verticalmente

Dada una matriz, invierte cada fila individualmente (como un efecto de espejo).

*/

function invertirFilas(unaMatriz){
    let filasInvertidas = [];
    for(let i = 0 ; i < unaMatriz.length ; i ++){
        filasInvertidas.push([]);
    }

    for(let i = 0 ; i < unaMatriz.length ; i ++){
        for(let j = unaMatriz[i].length-1 ; j >= 0 ; j --){
            filasInvertidas[i].push(unaMatriz[i][j]);
        }
    }
    return(filasInvertidas);
}

let matriz = [[3,2,1],[6,5,4],[9,8,7]]; // [[1,2,3],[4,5,6],[7,8,9]] 

console.log(invertirFilas(matriz));