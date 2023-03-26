function isSubset(arr1,arr2){
    let largerArr
    let smallArr

    if(arr1.length > arr2.length){
        largerArr = arr1
        smallArr = arr2
    }else{
        largerArr = arr2
        smallArr = arr1
    }

    for(let i = 0; i < largerArr.length; i++){
        let founMatch = false

        for (let j = 0; j < largerArr; j++){
            if(smallArr[i] === largerArr[j]){
                founMatch = true
                break
            }
        }
        if(founMatch === false) { return false}
    }
    return true
}

//해쉬 테이블 사용시

function hashIsSubset(arr1, arr2){
    let largerArr;
    let smallerArr;
    let hashTable = []

    if(arr1.length > arr2.length){
        largerArr = arr1
        smallerArr = arr2
    }else{
        largerArr = arr2
        smallerArr = arr1
    }
    for(const value of largerArr){
        hashTable[value] = true
    }
    for(const value of smallerArr){
        if(!hashTable[value]) {return false}
    }
    return true
}