/*
El índice de masa corporal (IMC), o IMC por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El IMC se calcula con la siguiente fórmula:peso / altura^2

Escribir una función llamada bmique reciba dos argumentos: peso y altura, y devolver una cuerda con las siguientes posibilidades:

"Bajo de peso" si el IMC < 18,5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

function bmi(peso,altura){

    let imc = peso/altura**2;

    if(imc >=18.5 && imc <=24.9){

        return("Normal");

    }else if(imc >= 25 && imc <= 29.9){

        return("Sobrepeso");
    
    } else if(imc >= 30){

        return("Obeso");

    } else{

        return("Bajo peso");

    }

}
// escribe la función bmi acá

// código de prueba
console.log(bmi(65, 1.8)) // "Normal" 20
console.log(bmi(72, 1.6)) // "Sobrepeso" 28.125
console.log(bmi(52, 1.75)) //  "Bajo de peso" 16.98
console.log(bmi(135, 1.7)) // "Obeso" 46.8