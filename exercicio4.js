/* Dado um array de inteiros e o seu número
de elementos, inverta a posição dos seus
elementos.
*/

const initial = 0
function invert(arr, size, initial){
    if(size == 0){
        return arr
    }  

    if(initial >=size){
        return arr
    }
     
    [arr[initial], arr[size-1]] = [arr[size-1], arr[initial]]
    
    return invert(arr, size-1, initial +1)
}

console.log(invert([1,2,3,4,5,6,7], 7, initial))
