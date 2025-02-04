/*
Ahora voy a explicar y deglozar como es la estrategia para recorrer una matriz por columnas


*/

function recorrerPorColumnas(unaMatriz){

    let filas = unaMatriz.length; // Inicializamos una varible con el numero de filas
    let columnas = unaMatriz[0].length; // Inicializamos una varible con el numero de columnas

    for(let j = 0 ; j < columnas ; j ++){
        for(let i = 0 ; i < filas ; i++){
            console.log(unaMatriz[i][j]);
        }
    }
}
let matriz = [[1,2,3],[4,5,6],[7,8,9]];
recorrerPorColumnas(matriz);
/*
En esta estrategia primero se inicializa una variable llamada
filas las cuales en este caso son 3 y se inicializa otra variable la
cual se llama columnas que en este caso son 3 (ya que el ejemplo es con una matriz cuadrada)

Despues se inicializa el pimer ciclo for el cual se va a declarar la variable j
y en su condicion j < columnas, este tomara los siguiente valores por iteracion --> 0,0,0,1,1,1,2,2,2.
J va a representar los indices dentro de los arrays dentro de la matriz.

Luego se inicializa el segundo ciclo for el cual esta anidado, este se inicializa con la varible i
y en su condicion i < filas, este tomara los siguientes valores por iteracion --> 0,1,2

Por ultimo se muestra por consola los numeros. hay que mencionar que j e i cambian de lugar a la hora de llamar al elemento dentro del vector
matriz = [[1,2,3],[4,5,6],[7,8,9]]
unaMatriz[i][j] => (0,0),(1,0),(2,0),(0,1),(1,1),(2,1),(0,2),(1,2),(2,2)

Devolvera :
1
4
7
2
5
8chat dentro de los for en 
3
6
9


En resumen j va ir tomando los indices fijos por iteracion de elementos dentro de los vectores de la matriz
e i va ir tomando los indices de los vectores dentro de la matriz
*/