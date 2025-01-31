/*
Escribir una función llamada passwordque reciba una cadena y regrese una nueva cadena realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplace el carácter “a” por “4”.
Reemplace el carácter “e” por “3”.
Reemplace el carácter “i” por “1”.
Reemplace el carácter “o” por “0”.

*/

function password(str){
    let password = str;
    password=password.replaceAll("a","4");
    password=password.replaceAll("e","3");
    password=password.replaceAll("i","1");
    password=password.replaceAll("o","0");
    password=password.replaceAll(" ","");

    return(password);

}


function password2(str){
    let password = str;

    for(let i = 0 ; i < str.length ; i ++){

        switch (str[i]) {
            case "a":

                password = password.replace(str[i], "4");

                break;
            case "e":

                password = password.replace(str[i],"3");

                break;
            case "i":

                password = password.replace(str[i],"1");

                break;

                case " ":
                
                password = password.replace(str[i],"");

                break;

                case "o":
                password = password.replace(str[i],"0");

                break;

            default:
                break;
        }

    }
    return(password);

}

// escribe tu función acá

// código de prueba
console.log(password2("hola")) // "h0l4"
console.log(password2("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""