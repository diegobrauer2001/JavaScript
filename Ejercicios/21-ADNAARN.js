/*
Escribir una función llamada transcribirque recibe una cadena (una cadena de ADN) y retorna otra cadena (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U



*/

function transcribir(adn){


    let arn = adn.toLowerCase();

    let transcripcion = "";

    for( let i = 0 ; i < arn.length ; i ++){

        switch (arn[i]) {
            case "g":
                transcripcion= transcripcion.concat("c");
                break;
            
            case "c":
                transcripcion = transcripcion.concat("g");
                break;
            case "t":
                transcripcion = transcripcion.concat("a");
                break;
            case "a":
                transcripcion = transcripcion.concat("u");
                break;
            default:
                break;
        }

    }
    transcripcion = transcripcion.toUpperCase()
    return(transcripcion);
}

// escribe tu función acá

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"