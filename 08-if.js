/*
El if-else-else if son bloques de deciscion los cuales son escructuras de control de flujo del programa los cuales se utiliizan para 
tomar una decision en base a una condicion.

*/
function esMayor(edad){

    

    if (edad >= 18 && edad < 30){
    
        return ("Es mayor de edad");
    
    } else if(edad >=30 && edad < 60){

        return ("Es un adulto");
    
    } else if(edad >=60){

        return ("Es un anciano");

    } else{
        return ("Es menor de edad");
    }

}

console.log(esMayor(70));
