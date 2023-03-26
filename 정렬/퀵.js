class SortableArray {
    constructor(array) {
        this.array = array;
    }

    PageTransitionEvent(leftPointer, rightPointer) {
        let pivotIndex = rightPointer;
        let pivot = this.array[pivotIndex];
        rightPointer--;
        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer++;
            }

            while (this.array[rightPointer] > pivot) {
                rightPointer--;
            }

            if (leftPointer >= rightPointer) {
                break;
            } else {
                [this.array[leftPointer], this.array[rightPointer]] = [
                    this.array[rightPointer],
                    this.array[leftPointer],
                ];
                leftPointer++;
            }
        }

        [this.array[leftPointer], this.array[pivotIndex]] = [
            this.array[pivotIndex],
            this.array[leftPointer],
        ];

        return leftPointer;
    }
    quicksort(leftIndex, rightIndex) {
        if (rightIndex - leftIndex <= 0) {
            return;
        }
        let pivotIndex = this.PageTransitionEvent(leftIndex, rightIndex);
        this.quicksort(leftIndex, pivotIndex - 1);
        this.quicksort(pivotIndex + 1, rightIndex);
    }
}
const arr = [0, 1, 2, 5, 6, 3]
const 나나 = new SortableArray(arr)

console.log(나나.array)
나나.quicksort(0, arr.length-1)
console.log(나나.array)
