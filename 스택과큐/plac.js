// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     enqueue(value) {
//         const newNode = new Node(value)
//         if(this.head === null){
//             this.head = this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.size ++
//     }

//     dequeue(){
//         const value = this.head.value
//         this.head = this.head.next
//         this.size --
//         return value
//     }

//     peek() {
//         return this.head.value
//     }
// }

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class PriorityQueue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = this.tail = newNode
            
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size ++
    }

    dequeue(){
        if(this.size > 0){
            const value = this.head.value
            this.head = this.head.next
            this.size --
            return value
        }
    }

    peek(){
        if(this.head) return this.head.value
    }
}

q = new PriorityQueue
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.peek())

function solution(priorities, location){
    const queue = new Queue()
    for (let i = 0; i < priorities.length; i++ ){
        queue.enqueue([priorities[i], i])
    }

    priorities.sort((a,b) => b-a)
    let count = 0
    while (true) {
        const currentValue = queue.peek()
        if(currentValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue())
        }else{
            const value = queue.dequeue()
            count +=1
            if(location === value[1])
                return count
        }
    }
    
}
