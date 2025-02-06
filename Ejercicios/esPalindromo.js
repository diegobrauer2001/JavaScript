/*
Dado un entero x, devuelve truesi xes un
palíndromo
, y falsede otro modo .

 

Ejemplo 1:

Entrada: x = 121
 Salida: verdadero
 Explicación: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda.
Ejemplo 2:

Entrada: x = -121
 Salida: falso
 Explicación: De izquierda a derecha, se lee -121. De derecha a izquierda, se convierte en 121-. Por lo tanto, no es un palíndromo.
Ejemplo 3:

Entrada: x = 10
 Salida: falso
 Explicación: Lee 01 de derecha a izquierda. Por lo tanto, no es un palíndromo.



*/



function esPalindromo(x) {
    let numero = x;
    let str = numero.toString();
    let indice = -1;
    for(let i = str.length -1 ; i >=0 ; i--){
        indice +=1
        if(str.charAt(indice) != str.charAt(i)){
            return (false);
        }
    }
    return(true);
};


console.log(esPalindromo(-121));