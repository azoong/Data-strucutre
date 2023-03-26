const countdown = (Number) =>{
    let count = Number
    console.log("카운트다운 시작", count)
    while (count > 0){
        count -= 1
        console.log(count)
    }
    return "빵"
}


console.log(countdown(5))


function countdown(number) {
    let timer = setInterval(() => { 
        console.log(number)
        if (number == 0) clearInterval(timer)
        number --
    }, 1000)
    
}
console.log(countdown(5))


// function count2(number) {
//     for(let i = number; i >= 0; i --){
//         console.log(i)
//     }
// }

// // console.log(count2(5))


// function count3(number){
//     console.log(number)
//     count2(number-1)
// }

// // console.log(count3(5))


// function CD(number){
//     let count = number
//     console.log(number)
//     let countId = setInterval(()=> (console.log(count),count -= 1 ) , 1000)
//     if(count<0){clearInterval(countId)}
    
    
// }
// console.log(CD(5))