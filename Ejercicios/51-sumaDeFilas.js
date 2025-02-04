/*
En el ejercicio "Sumar los bordes de una matriz" , la idea es sumar solo los elementos que forman el borde de la matriz, es decir, los elementos que están en la primera fila, la última fila, la primera 
columna y la última columna. , sin contar los elementos que están repetidos en las esquinas.

1  2  3
4  5  6
7  8  9

Primera fila:[1, 2, 3]
Última fila:[7, 8, 9]
Primera columna (sin contar las esquinas):[4]
Última columna (sin contar las esquinas):[6]
Por lo tanto, la suma total de los bordes es:
1 + 2 + 3 + 7 + 8 + 9 + 4 + 6 = 40

*/

function sumar(unaMatriz){

    let sumaPrimeraFila = 0;
    let sumaUltimaFila = 0;
    let sumaBordes = 0;
    let total;

    for(let i = 0 ; i < unaMatriz.length ; i ++){
        
        if(i === 0){
            for(let j = 0 ; j < unaMatriz[i].length ; j ++){
                sumaPrimeraFila = sumaPrimeraFila + unaMatriz[i][j];
            }
        }

        }

    

    total = sumaPrimeraFila + sumaUltimaFila + sumaBordes;

    return(total);
}

let matriz =[[1,2,3],[4,5,6],[7,8,9]];
console.log(sumar(matriz)); // 40