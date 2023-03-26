function insertion_sort(array){
    for (let i = 1; i<array.length; i++){
        let tempValue = array[i]
        let postion = i-1

        while (postion>= 0){
            if(array[postion]  > tempValue){
                array[postion+1] = array[postion]
                postion -= 1
            }else    break
        }
        array[postion+1] = tempValue
    }
    return array
}




console.log(insertion_sort([2,4,7,1,3]))
console.log(insertion_sort([1,3,-2,5,4,0,2]))


