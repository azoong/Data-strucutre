function solution(n, m) {
    for (let i = Math.min(n,m); i > 0 ; i--){
        if(n%i == 0 && m%i ==0) return i
    }
}

console.log(solution(20, 10))


//최소공배수

function 최소공배수(n,m) {
    let num = 1
    while(true){
        if(Math.min(n,m) * num % Math.max(n,m) == 0 ){
            return Math.min(n,m) * num
        }
        num ++
    }
    
}

console.log(최소공배수(3,4))