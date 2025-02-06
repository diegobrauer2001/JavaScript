/*
Se le proporcionan dos cadenas s1de s2igual longitud. Un intercambio de cadenas es una operación en la que se eligen dos índices en una cadena (no necesariamente diferentes) e intercambian los caracteres en esos índices.

Devuelve true si es posible hacer que ambas cadenas sean iguales realizando como máximo un intercambio de cadenas en exactamente una de las cadenas. De lo contrario, devuelve false.

Ejemplo 1:

Entrada: s1 = "banco", s2 = "conba"
 Salida: verdadero
 Explicación: Por ejemplo, intercambie el primer carácter con el último carácter de s2 para crear "banco".
Ejemplo 2:

Entrada: s1 = "atacar", s2 = "defender"
 Salida: falso
 Explicación: Es imposible hacerlos iguales con un intercambio de cadenas.
Ejemplo 3:

Entrada: s1 = "kelb", s2 = "kelb"
 Salida: verdadero
 Explicación: Las dos cadenas ya son iguales, por lo que no se requiere ninguna operación de intercambio de cadenas.



*/

function sonStringIguales(s1,s2) {
    let sonIguales;
    if(s1.length === s2.length ){
        for(let i = 0 ; i < s1.length ; i++){
            sonIguales = s1.includes(s2[i]);
            if(sonIguales === false){
                return(sonIguales);
            }
        }
        
    }else{
        return(false);
    }
    return(sonIguales);
    
};

let str1 = "banco";
let str2 = "conba"
console.log(sonStringIguales(str1,str2));
