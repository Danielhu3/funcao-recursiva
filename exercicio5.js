/*
Escreva uma função recursiva que determine quantas
vezes um dígito K ocorre em um número natural N. Por
exemplo, o dígito 2 ocorre 3 vezes em 762021192.*/

function countTimes(k,n,i=0,count=0){
    if(typeof(n)!='string'){
        n = n.toString()
    }
    
    if(i <= n.length){
        if(k==n[i]){
            return countTimes(k,n,i+1,count+1)
        }
        return countTimes(k,n,i+1,count)

    }

    return count
}

console.log(countTimes(6, 65509555566))

