
//교집합을 구하는 함수 단 복잡도는 O(N)이여야 한다

arr1 = [1,2,3,4,5]
arr2 = [0,2,4,6,8]


const 교집합 =  (arr1, arr2) => {
    let hashTable = {}
    let intersection = []
    for (const value of arr1 ){
        hashTable[value] = value
    }

    for (const value of arr2){
        if(hashTable[value]) intersection.push(value)
    }
    return intersection
}


console.log(교집합(arr1,arr2))