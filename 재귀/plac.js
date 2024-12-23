
arr1 = ["ab", "c", "def", "ghij"]

function solution(arr) {
    if (arr.length == 0) return 0
    return arr[0].length + solution(arr.slice(1))
}


console.log(solution(arr1)) // 10


arr2 = [1,2,3,4,5,6,7,8,9,10]


solution = (arr) => {
    if (arr.length == 0) return []
    if(arr[0] % 2 == 0) return [arr[0]].concat(solution(arr.slice(1))) 
    return solution(arr.slice(1))
    
}

console.log(solution(arr2)) // [2,4,6,8,10]


solution = (T_number) => {
    if(T_number == 0) return 0
    return solution(T_number-1) + T_number
}

console.log(solution(7))


solution = (arr) => {
    if (arr.length == 0) return 0
    if (arr[0] === 'x') return 1
    return 1 + solution(arr.slice(1))
}

console.log(solution("axbcdefghijkmnopqrstuvwxyzxx"))



solution = (x,y) => {

}

function uniquePaths(rows, columns) {
    if(rows === 1 || columns === 1) {
      return 1;
    }
  
    return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
  }

console.log(uniquePaths(3, 7)) // 28

