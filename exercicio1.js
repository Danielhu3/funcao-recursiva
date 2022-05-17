/* se o valor passado for 0 return true
se o valor passado for 1 return false
para qualquer outro valor faça n - 2 ate reduzi-lo a 0 ou 1.
*/
function isEven(num){
    if(num === 0){
        return true
    }

    if(num === 1){
        return false
    }
    return isEven(num -2)

}

console.log(isEven(2))