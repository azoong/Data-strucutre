class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(newValue){
        const newNode = new Node(newValue)
        if(this.head === null){
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    dequeue(){
        const value = this.head.value
        this.head = this.head.next
        return value
    }
    peek(){
        return this.head.value
    }
}

const queue = new Queue()

queue.enqueue(0)
queue.enqueue(0)
queue.enqueue(0)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)

// function solution(priorities, location) {
//     const queue = new Queue()

//     for(let i = 0; i < priorities.length; i += 1){
//         queue.enqueue([priorities[i],i])
//     }
//     priorities.sort((a,b) => b-a)
//     let count = 0
//     while(true){
//         const currentValue = queue.peek()
//         if(currentValue[0] < priorities[count]){
//             queue.enqueue(queue.dequeue())
//         } else {
//             const value = queue.dequeue()
//             count += 1
//             if(location === value[1]){
//             return count   
//             }

//         }
//     }
//     return count
// }

// console.log(solution([2,1,3,2],2))