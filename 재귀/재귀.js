function countdown(number){
    console.log(number)
    if(number === 0){
        return "끝"
    }
    countdown(number-1)
}


console.log(countdown(5))


function 재귀(array){
    for (let temp of array){
        if(temp.length>1) 재귀(temp)
        else console.log(temp)
     }
}