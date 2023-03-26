//문자열 배열에서 첫번째 중복값을 반환하는 함수 단 효율성이 O(N)이여야 한다.

const arr = ["a","b","c","d","c","d","e"]

function 중복(arr){
    hash = {}
    for (const value of arr){
        if(!hash[value]) hash[value] = value
        else return value
    }
} 

console.log(중복(arr))