//O(n^2) time complexity 
//최선의 경우 O(n)의 시간복잡도를 가지는 삽입정렬,
//최악의 경우 O(n^2) 의 시간복잡도를 가지는 삽입정렬 
//평균적으로 O(n^2)/2의 시간복잡도를 가진다.
//어느 정도 정렬이 되어있는 경우에 보다 효율적인 정렬 알고리즘
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


