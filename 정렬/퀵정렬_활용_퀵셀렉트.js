class SortableArray {
    constructor(array) {
        this.array = array;
    }

    quickselect(kthLowestValue, leftIndex = 0, rightIndex=this.array.length - 1) {
        // 기본 케이스 - 부분 배열이 하나의 요소만 가질 때
        if (rightIndex - leftIndex <= 0) {
            return this.array[leftIndex];
        }

        // 배열을 분할하고 피벗의 인덱스를 가져옴
        const pivotIndex = this.partition(leftIndex, rightIndex);

        // 찾고자 하는 값이 피벗의 왼쪽에 있는 경우
        if (kthLowestValue < pivotIndex) {
            // 피벗 왼쪽의 부분 배열에 대해 재귀적으로 quickselect 수행
            return this.quickselect(kthLowestValue, leftIndex, pivotIndex - 1);
        }
        // 찾고자 하는 값이 피벗의 오른쪽에 있는 경우
        else if (kthLowestValue > pivotIndex) {
            // 피벗 오른쪽의 부분 배열에 대해 재귀적으로 quickselect 수행
            return this.quickselect(kthLowestValue, pivotIndex + 1, rightIndex);
        }
        else { // kthLowestValue === pivotIndex
            // 분할 후 피벗 위치가 찾고자 하는 k번째 값의 위치와 같으면
            return this.array[pivotIndex];
        }
    }

    partition(leftPointer, rightPointer) {
        let pivotIndex = rightPointer;
        let pivot = this.array[pivotIndex];
        rightPointer -= 1;
        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer += 1;
            }
            while (this.array[rightPointer] > pivot) {
                rightPointer -= 1;
            }
            if (leftPointer >= rightPointer) {
                break;
            } else {
                [this.array[leftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[leftPointer]];
                leftPointer += 1; 
                rightPointer -= 1;
            }
        }
        [this.array[leftPointer], this.array[pivotIndex]] = 
          [this.array[pivotIndex], this.array[leftPointer]];
        return leftPointer;
    }
    
}

// 사용 예시:
const arr = new SortableArray([5, 3, 8, 1, 4]);
console.log(arr.quickselect(3, 0, arr.array.length - 1)); // 3번째로 작은 값 출력