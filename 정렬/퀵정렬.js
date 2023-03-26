class SortableArray {
    constructor(array) {
        this.array = array;
    }

    partition(leftPointer, rightPointer) {
        let pivotIndex = rightPointer;
        let pivot = this.array[pivotIndex];
        rightPointer -= 1;

        while (leftPointer <= rightPointer) {
            while (this.array[leftPointer] < pivot) {
                leftPointer++;
            }
            while (this.array[rightPointer] > pivot) {
                rightPointer--;
            }
            if (leftPointer <= rightPointer) {
                [this.array[leftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[leftPointer]];
                leftPointer++;
                rightPointer--;
            }
        }

        return leftPointer;
    }

    quicksort(leftIndex, rightIndex) {
        if (leftIndex >= rightIndex) {
            return;
        }
        let pivotIndex = this.partition(leftIndex, rightIndex);
        this.quicksort(leftIndex, pivotIndex - 1);
        this.quicksort(pivotIndex + 1, rightIndex);
    }
}


let myArray = [0,5,2,1,6,3];
let sortableArray = new SortableArray(myArray);

sortableArray.quicksort(0, myArray.length - 1);
console.log(sortableArray.array);


// 퀵솔트 간단코드
function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.pop();
    let left = [];
    let right = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([0,5,2,1,6,3]))