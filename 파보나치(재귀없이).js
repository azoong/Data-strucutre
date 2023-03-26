function fib(n){
    if(n == 0 || n == 1) return n
    let answer = 0
    result1 = 0
    result2 = 1
    for(let i=2; i<=n; i++){
        answer = result1 + result2
        result1 = result2
        result2 = answer
    }
    return answer
}

console.log(fib(3))
console.log(fib(5))
console.log(fib(10))