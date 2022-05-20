/* O máximo divisor comum (MDC) de dois
números inteiros x e y pode ser calculado
usando-se uma definição recursiva */

function mdc(x,y,limit=0,start=0,actualMdc=0){
    if(x==y){
        return x;
    }
    // o funçao só irá ser executada até chegar no menor numero entre x e y
    if(limit==0){ 
        if(x>y){
            limit = y
        }
        else{
            limit = x
        }
    }

    if(start<=limit){
        if(x % start == 0 && y % start == 0){
            return mdc(x,y,limit,start+1,actualMdc=start)
        }
        return mdc(x,y,limit,start+1,actualMdc)
    }
    
    return actualMdc
}

console.log(mdc(5,2))
