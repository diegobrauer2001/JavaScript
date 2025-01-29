//Escribir una función llamada imprimirArregloque 
// reciba un arreglo e imprima cada elemento en una línea a parte:

let arr = [1,2,3,4,5,6];

function imprimirArray(unArray){
    
    for(let i = 0;i < unArray.length; i++){
        
        console.log(unArray[i]);
    }

}

function imprimirArray2(unArray){
let i = 0 ;
    while(i < unArray.length){
        console.log(unArray[i]);
        i+=1;
        
    }

}
//Casos de prueba
imprimirArray(arr);

imprimirArray2(arr);