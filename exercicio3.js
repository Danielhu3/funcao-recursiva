/* 7) Usando recursividade, calcule a soma de
todos os valores de um array de reais
*/
let i = 0
function sum(arr){
    const length = arr.length
   if(length == 0){
       return 0
   }

   return arr[0] + sum(arr.slice(1))

}


console.log(sum([10, 10, 20]))