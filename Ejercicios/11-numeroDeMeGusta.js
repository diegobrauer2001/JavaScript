/*
Escribe una función llamada likesque recibe un número y retorna una cadena utilizando el formato de K para millas y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte a 34K
7'456,345 se convierten en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.

*/

function likes(unNumero){

    if(unNumero >=1000 && unNumero <10000){

        let strMil = unNumero.toString();
        return (strMil[0] + "K");
        
    } else if (unNumero >=10000 && unNumero < 100000){

        let strDiezMil = unNumero.toString();
        return (strDiezMil[0] + strDiezMil[1] + "K");

    }else if(unNumero >=100000 && unNumero < 1000000){

        let strCienMil = unNumero.toString();
        return (strCienMil[0] + strCienMil[1] + strCienMil[2] + "K")


    }else if(unNumero >=1000000){
        let strMillon = unNumero.toString();
        return strMillon[0] + "M"
    
    }else{

        let str = unNumero.toString();
        return (unNumero);
    }
    
}

// escribe tu respuesta acá

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"