// O(n^2) time complexity 버블정렬보다 약 2배 빠른 시간복잡도를 가지는 선택정렬 
function selectionSort(array){
    for(let i = 0; i<array.length; i++){
        let lowNumberIndex = i
        for (let j = i+1; j<array.length; j++){
            if(array[lowNumberIndex]> array[j]){
                lowNumberIndex = j
            }
        }
        if(lowNumberIndex != i){
            [array[i],array[lowNumberIndex]] = [array[lowNumberIndex], array[i]]
        }
    }
    return array
}
 

console.log(selectionSort([1,3,-2,5,4,0,2]))


