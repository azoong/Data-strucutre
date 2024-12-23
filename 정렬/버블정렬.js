// O(n^2) time complexity 
function bubbleSort(list, ascending = true) {
    let unsortedUntilIndex = list.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsortedUntilIndex; i++) {
            if ((ascending && list[i] > list[i + 1]) || (!ascending && list[i] < list[i + 1])) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]];
                sorted = false;
            }
        }
        unsortedUntilIndex -= 1;
    }
    return list;
}

console.log(bubbleSort([6,5,4,8,9,2], false))
console.log(bubbleSort([5,4,3,2,1]))