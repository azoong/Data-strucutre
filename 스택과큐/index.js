class Node {
    constructor(value){
        this.value = value
        this.nextNode = null
        this.prevNode = null
    }
}

class Queue {
    constructor(){
        this.firstNode = null
        this.lastNode = null
    }

    enqueue(value){
        const newNode = new Node(value)

        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }else{
            newNode.prevNode = this.lastNode
            this.lastNode.nextNode = newNode
            this.lastNode = newNode
        }
    }

    dequeue(){
        const deleteNode = this.firstNode
        this.firstNode = this.firstNode.nextNode
        return deleteNode
    }

    peek(){
        return this.firstNode
    }
}


let q = new Queue()

q.enqueue(2)
q.enqueue(3)
q.enqueue(1)
q.enqueue(4)

console.log(q.peek())
q.dequeue()
q.dequeue()

console.log(q.peek())


