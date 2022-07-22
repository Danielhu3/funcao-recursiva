/*
4) Um problema típico em ciência da computação consiste
em converter um número da sua forma decimal para a
forma binária. 
*/

function binario(numero, restos = ''){
    const divisao = Math.floor(numero/2)
    const resto = numero % 2

    if(divisao == 1){
        restos += resto
        restos += 1
        return restos.split('').reverse().join('')
    }

    return binario(divisao, restos += resto)

}

console.log(binario(50))