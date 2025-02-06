function convertirDeRomanoAEnteros(str) {
    let numeroEntero = 0;
    let valorAnterior = 0;
    for(let i = 0 ; i < str.length ; i++){
        
        
        switch(str[i]){
            case("M"):
                if(valorAnterior >= 1000){
                    
                    numeroEntero +=1000;
                    valorAnterior = 1000;
                }else{
                    
                    numeroEntero += 1000 - valorAnterior;
                    valorAnterior = 1000;
                }
                break;
            case("D"):
                if(valorAnterior >= 500){
                    
                    numeroEntero +=500;
                    valorAnterior = 500;

                }else{
                    
                    numeroEntero += 500 - valorAnterior;
                    valorAnterior = 500;
                }
                break;
            case("C"):
                if(valorAnterior >= 100){
                    
                    numeroEntero +=100;
                    valorAnterior = 100;
                }else{
                    
                    numeroEntero += 100 - valorAnterior;
                    valorAnterior = 100;
                }
                break;
            case("L"):
                if(valorAnterior >= 50){
                    
                    numeroEntero +=50;
                    valorAnterior = 50;
                }else{
                    
                    numeroEntero += 50 - valorAnterior;
                    valorAnterior = 50;
                }
                break;
            case("X"):
                if(valorAnterior >= 10){
                    
                    numeroEntero +=10;
                    valorAnterior = 10;
                }else{
                    
                    numeroEntero += 10 - valorAnterior;
                    valorAnterior = 10;
                }
                break;
            case("V"):
                if(valorAnterior >= 5){
                    
                    numeroEntero +=5;
                    valorAnterior = 5;
                }else{
                    
                    numeroEntero += 5 - valorAnterior;
                    valorAnterior = 5;
                }
                break;
            case("I"):
                if(valorAnterior >= 1){
                    
                    numeroEntero +=1;
                    valorAnterior = 1;
                }else{
                    
                    numeroEntero += 1 - valorAnterior;
                    valorAnterior = 1;
                }
                break;
            default:
                break;
            
    }
    
}
    return(numeroEntero);
};

console.log(convertirDeRomanoAEnteros("III"));
console.log(convertirDeRomanoAEnteros("MCMXCIV"));
console.log(convertirDeRomanoAEnteros("III"));