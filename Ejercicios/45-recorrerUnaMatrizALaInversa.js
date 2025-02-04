/**
 
Voy a explicar y deducir como se recorre una matriz a la inversa
 */


function recorrerMatrizALaInversa(unaMatriz){

    for(let i = unaMatriz.length-1 ; i >= 0  ; i--){
        for(let j = unaMatriz[i].length-1 ; j >= 0 ; j--){
            console.log(unaMatriz[i][j]);
        }
    }


}

matriz =[[1,2,3],[4,5,6],[7,8,9]]; 

recorrerMatrizALaInversa(matriz);


/*
Primero inicializamos un ciclo for en el cual se inicializa la variable i que 
va a tener el valor del largo de la matriz menos uno para evitar el caso de borde 
en la condicion del ciclo le decimos que i tiene que ser menor e igual a cero para asi tomar el 
valor del pimer indice. I va a recorrer la matriz de atras hacia delante ya que inicializa en 3 pero
debido al decremento termina en 0 

Luego inicializamos el ciclo for anidado y dentro de el inicializaremos 
la variable j que tendra el valor de la longitud del array a recorrer menos uno para evitar
el caso de borde , j va a recorrer todo los elementos del array de atras hacia delante 
ya que este va a ir decreiendo hasta llegar hasta 0 .

Entonces en conclucion i va a recorrer los indices de la matriz de el ultimo hacia el primero 
 y j va a arecorrer los indices del array[i] de atras hacia delante

 i en todo el ciclo va a tomar estos valores => 2,2,2,1,1,1,0,0,0 
 j en todo el ciclo va a tomar estos valores => 2,1,0,2,1,0,2,1,0

 Y los elementos seran :
 (2,2),(2,1),(2,0),(1,2),(1,1),(1,0),(0,2),(0,1),(0,0)

 Lo cual va a devolver:
9
8
7
6
5
4
3
2
1
*/

