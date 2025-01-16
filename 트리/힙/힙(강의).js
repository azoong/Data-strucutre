class MaxHeap { //
    constructor() {
        this.heap = [null] //0번 인덱스를 null로 설정하는 이유는 
        //1번 인덱스를 루트노드로 설정하여 계산을 더 편하게 하기 위함
    }

    push(value) { //힙 삽입
        this.heap.push(value)
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex / 2)

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex]
            this.heap[parentIndex] = value
            this.heap[currentIndex] = temp

            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex / 2)
        }

    }

    pop() { //힙 삭제
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let left_child_index = 2;
        let right_child_index = 3;
        while (
            this.heap[currentIndex] < this.heap[left_child_index] ||
            this.heap[currentIndex] < this.heap[right_child_index]
        ) {
            // 왼쪽 자식만 있는 경우가 있기 때문에 무조건 우측이 큰거 부터 비교
            if(this.heap[left_child_index] < this.heap[right_child_index]) {
                [this.heap[currentIndex], this.heap[right_child_index]] = [this.heap[right_child_index], this.heap[currentIndex]]
                currentIndex = right_child_index

            }else {
                [this.heap[currentIndex], this.heap[left_child_index]] = [this.heap[left_child_index], this.heap[currentIndex]]
                currentIndex = left_child_index
            }
            left_child_index = currentIndex * 2
            right_child_index = currentIndex * 2 + 1
        }
       
        return returnValue
    }

}


const heap = new MaxHeap()


heap.push(1)
heap.push(30)
heap.push(52)
heap.push(11)
heap.push(8)
heap.push(91)
heap.push(32)
heap.push(7)
heap.pop()
// heap.pop()



console.log(heap.heap) // [null, 91, 30, 52, 11, 8, 1, 30, 7]





function solution(n, works) {

    if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0

    let heap = new MaxHeap()
    works.forEach(work => heap.push(work))

    for (let i = 0; i < n; i++) {
        heap.push(heap.pop() - 1)
    }

    console.log(heap.heap)
    return heap.heap.reduce((acc, cur) => acc + cur*cur, 0)
    // return heap.heap.reduce((a,b) => a + b*b, 0)

}

console.log(solution (4, [4,3,3])) // 12


