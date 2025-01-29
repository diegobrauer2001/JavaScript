/*
Escribir una función llamada calcularImpuestosque reciba dos argumentos numéricos: 
dado ingresos. Si edades igual o mayor a 18 y los ingresos son iguales 
o mayores a 1000 debe retornar ingresos* 40%. De lo contrario regresará 0.


*/

function calcularImpuestos(edad,ingresos){
    if(edad >=18){
        return(ingresos*0.4);
    } else{
        return (0);
    }
}

// escribe tu respuesta acá

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0