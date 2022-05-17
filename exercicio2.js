/*Implemente uma função recursiva que,
dados dois números inteiros x e n, calcula o
valor de x^n
*/

function pow(x,n){
    
    if(x == 0){
        return 0
    }
    if(n == 0){
        return 1
    }

    if(n > 0){
        return x * pow(x, n-1)
    }
    
}

console.log(pow(2, 9))