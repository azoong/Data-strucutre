class Queue {
    constructor() {
        this.queue =  []
        this.first = 0
        this.last = 0
    }

    enqueue(value) {
        this.queue[this.last++] = value
    }

    dequeue() {
        const value = this.queue[this.first]
        if(value === undefined) {
            return null
        }
        delete this.queue[this.first]
        this.first += 1
        return value
    }

    peek(){
        return this.queue[this.first]
    }

    size(){
        return this.last - this.first
    }
}


const queue = new Queue()
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(1)
queue.enqueue(1)
queue.enqueue(1)
// console.log(queue.dequeue())
// queue.enqueue(1)

// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(3)
console.log(queue.peek())
console.log(queue)
console.log(queue.size())


