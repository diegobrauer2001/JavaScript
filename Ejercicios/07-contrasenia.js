/*
Escribir una función llamada contrasenaValida que reciba una cadena y retorne truesi
la cadena es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

function contrasenaValida(unaContasena){

    if(unaContasena ==="2Fj(jjbFsuj" || unaContasena === "eoZiugBf&g9"){
        return (true)
    } else{
        return(false)
    }
}

// escribe tu respuesta acá

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false