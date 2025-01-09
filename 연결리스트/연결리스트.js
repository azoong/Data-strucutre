class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.first_node = null;
    this.last_node = null;
  }

  read(index) {
    let curr_node = this.first_node;
    let curr_index = 0;
    while (curr_index < index) {
      curr_node = curr_node.next;
      curr_index++;
      if (curr_node === null) return null;
    }
    return curr_node;
  }

  find(value) {
    let curr_node = this.first_node;
    while (curr_node.value !== value) {
      curr_node = curr_node.next;
    }
    return curr_node;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.first_node === null) {
      this.first_node = newNode;
      this.last_node = newNode;
    } else {
      this.last_node.next = newNode;
      this.last_node = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  delete(index) {
    let prev_node = this.first_node;
    if (index === 0) {
      this.first_node = this.first_node.next;
      return prev_node;
    }
    let curr_index = 0;
    let next_node = prev_node.next;
    while (curr_index < index) {
      prev_node = next_node;
      next_node = next_node.next;
      curr_index++;
      if (next_node === null) return null;
    }
    prev_node.next = next_node.next;
    return next_node;
  }

  remove(value) {
    if (this.first_node.value == value) {
      this.first_node = this.first_node.next;
    } else {
      let prev_node = this.first_node;
      while (prev_node.next.value !== value) {
        prev_node = prev_node.next;
      }

      //이전노드의 다음에 다음 노드를 연결하면 해당노드의 연결이 끊어진다.
      prev_node.next = prev_node.next.next;
    }
  }

  reverse() {
    this.last_node = this.first_node;
    let prev_node = null;
    let curr_node = this.first_node;
    let next_node = null;

    while (curr_node !== null) {
      next_node = curr_node.next; // 1 => 2 => 3 => 4 => 5
      curr_node.next = prev_node; // null <= 1 => 2 => 3 => 4 => 5
      prev_node = curr_node; // 1 => null => 2 => 3 => 4 => 5
      curr_node = next_node;
    }
    this.first_node = prev_node;
    return this;
  }

  reverse2() {
    this.last_node = this.first_node;
    let prev_node = null;
    let curr_node = this.first_node;
    let next_node = null;
    while (curr_node !== null) {
      next_node = curr_node.next;
      curr_node.next = prev_node;
      curr_node = next_node;
    }
  }

  display() {
    let curr_node = this.first_node;
    let displayString = "[";
    1;

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

const LinkedList = new SinglyLinkedList();

LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);
LinkedList.append(5);
LinkedList.display();
console.log(LinkedList);
console.log(LinkedList.read(0));
LinkedList.display();
LinkedList.remove(1);
LinkedList.insert(LinkedList.read(1), 10);
LinkedList.display();
// LinkedList.display()
// LinkedList.insert(LinkedList.find(2),10)
// LinkedList.display()

LinkedList.reverse();
console.log(LinkedList);
LinkedList.display();
