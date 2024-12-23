class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.firstNode = null
        this.lastNode = null
    }
    
    enqueue (value){
        const newNode = new Node(value)
        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }else{
            this.lastNode.next = newNode
            this.lastNode = newNode
        }
    }
    
    dequeue (){
        const deleteNode = this.firstNode.value
        this.firstNode = this.firstNode.next
        return deleteNode
    }
    
    peek(){
        return this.firstNode.value
    }
}



function solution(priorities, location) {
    let queue = new Queue()
    for (let i = 0 ; i<priorities.length ; i++){
        queue.enqueue([priorities[i], i])
    }
    priorities.sort((a,b) => b-a)
    let count = 0
    while(true){
        let currValue = queue.peek()
        if(currValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue())
        }else{
            const value = queue.dequeue()
            count ++
            if(location === value[1]){
                return count
            }
        }
        
    }
    return count;
}

console.log(solution([2,1,3,2], 0))