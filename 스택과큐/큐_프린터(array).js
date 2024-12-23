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
    value = this.queue[this.first]
    if(value === undefined) {
      return null
    }
    delete this.queue[this.first]
    this.first += 1
    return value
  } 
}
