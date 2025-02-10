/*
Ejercicio 4: Expresión bien balanceada

Se dice que una expresión con paréntesis está balanceada si cada paréntesis abierto tiene su correspondiente paréntesis de cierre en el orden correcto.

Ejemplos:

    "()" → ✅ Balanceado
    "(())" → ✅ Balanceado
    "(()" → ❌ No balanceado
    "(()))" → ❌ No balanceado

Instrucciones:
Escribe una función es_balanceada(expresion: str) -> bool que determine si una expresión con paréntesis es válida.

*/

function parentesisBalanceados(str){
    let cantParentesisDerechos = 0 
    let cantParentesisIzquierdos = 0
    for(let i = 0 ; i < str.length ; i ++){
        if(str[i] === "("){
            cantParentesisIzquierdos += 1
        }
        if(str[i] === ")"){
            cantParentesisDerechos += 1
        }
    }
    if(cantParentesisDerechos === cantParentesisIzquierdos){
        return true;

    }else{
        return false;
    }
}

console.log(parentesisBalanceados("(())"));
console.log(parentesisBalanceados("(()))"));