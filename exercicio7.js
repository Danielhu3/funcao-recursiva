/* 9) Escreva uma função recursiva que determine quantas
vezes um dígito K ocorre em um número natural N. Por
exemplo, o dígito 2 ocorre 3 vezes em 762021192. */


function natural(n,k, count = 0){

    if(typeof(n) != 'string'){
        n = n.toString()
    }

    if(n.length <= 0) return count

    if(n[0] == k){
        count+=1
    }
    var sliced = n.slice(1)
    
    return natural (sliced,k, count)

 
}

console.log(natural(5878958, 0))



