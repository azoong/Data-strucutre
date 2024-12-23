function solution(arr1, arr2){
    hash = {}
    result = []
    for (let i of arr1) {
        hash[i] = true
    }
    for (let i of arr2){
        if(hash[i]) {
            result.push(i)
        }
    }
    return result
}

arr1 = [0,2,4,6,8]
arr2 = [1,2,3,4,5]


console.log(solution(arr1, arr2)) // [2,4]

