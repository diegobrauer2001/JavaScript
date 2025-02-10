

function encontrarFaltante(arr){
    let maximo = max(arr);
    let faltante;
    for(let i = 0 ; i <= maximo ; i ++){
        if(! arr.includes(i)){
            faltante = i;
        }
    }
    return faltante;

}

function max(arr){
    let max = arr[0];

    for(let i = 0 ; i < arr.length ; i ++){
        if(max < arr[i]){
            max = arr[i];

        }

    }
    return max;
}
let array =[3, 7, 1, 2, 8, 4, 5];

console.log(encontrarFaltante(array));