function countdown(number){
    console.log(number)
    if(number === 0){
        return "끝"
    }
    countdown(number-1)
}


console.log(countdown(5))
