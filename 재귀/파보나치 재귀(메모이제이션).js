//파보나치 수열
// 0,1,1,2,3,5,6,13,21,34

function fib(n, memo = {}){
    console.log(memo)
    if (n == 1 || n== 2) return n
    if (!memo[n]){
        memo[n] = fib(n-2, memo) + fib(n-1, memo)
    }
    return memo[n]
}
//memo 에 값을 넣어서 중복으로 재귀되는걸 막아준다.
console.log(fib(6))


function fib2(n){
    console.log('RECURSION')
    if( n == 0 || n ==1) return n
    return fib2(n-2) + fib2(n-1)
}

// console.log(fib2(6))
// 메모이제이션 방식을 썻을때와 다르게 재귀횟수가 엄청 많아져서 비효율적이다.

