class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.first_node = null;
    this.last_node = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if( this.first_node === null ) {
      this.first_node = newNode;
      this.last_node = newNode;
    }else{
      newNode.prev = this.last_node;
      this.last_node.next = newNode;
      this.last_node = newNode;
    }
  }

  dequeue(){
    if(this.first_node === null){
      return null;
    }
    let dequeue = this.first_node;
    this.first_node = this.first_node.next;
    this.first_node.prev = null;
    return dequeue
  }

  front() {
    return this.first_node;
  }

  display() {
    let curr_node = this.first_node;
    let displayString = "[";

    while (curr_node !== null) {
      //현재노드를 보여주고 다음 노드로 넘어간다
      displayString += `${curr_node.value}, `;
      curr_node = curr_node.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}


const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.enqueue(1);
doublyLinkedList.enqueue(2);
doublyLinkedList.enqueue(3);
doublyLinkedList.display();
doublyLinkedList.dequeue();
doublyLinkedList.dequeue();
doublyLinkedList.display();
console.log(doublyLinkedList.front());