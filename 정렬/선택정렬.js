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


