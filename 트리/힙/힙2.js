class Heap {
  constructor() {
    this.data = [];
  }

  rootNode() {
    return this.data[0];
  }

  lastNode() {
    return this.data[this.data.length - 1];
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasGreaterChild(index) {
    return (
      (this.data[this.leftChildIndex(index)] !== undefined &&
        this.data[this.leftChildIndex(index)] > this.data[index]) ||
      (this.data[this.rightChildIndex(index)] !== undefined &&
        this.data[this.rightChildIndex(index)] > this.data[index])
    );
  }

  calculateLargerChildIndex(index) {
    if (this.data[this.rightChildIndex(index)] === undefined) {
      return this.leftChildIndex(index);
    }

    if (
      this.data[this.rightChildIndex(index)] >
      this.data[this.leftChildIndex(index)]
    ) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }

  insert(value) {
    this.data.push(value);
    let newNodeIndex = this.data.length - 1;

    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      [this.data[this.parentIndex(newNodeIndex)], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[this.parentIndex(newNodeIndex)],
      ];
      newNodeIndex = this.parentIndex(newNodeIndex);
    }
  }

  delete() {
    const valueToDelete = this.rootNode();

    if (this.data.length <= 1) {
      this.data.pop();
      return valueToDelete;
    }

    this.data[0] = this.data.pop();
    let trickleNodeIndex = 0;

    while (this.hasGreaterChild(trickleNodeIndex)) {
      const largerChildIndex = this.calculateLargerChildIndex(trickleNodeIndex);
      [this.data[trickleNodeIndex], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[trickleNodeIndex],
      ];
      trickleNodeIndex = largerChildIndex;
    }

    return valueToDelete;
  }
}


let h = new Heap();
h.insert(100);
h.insert(88);
h.insert(25);
h.insert(87);
h.insert(16);
h.insert(8);
h.insert(12);
h.insert(86);
h.insert(50);
h.insert(2);
h.insert(15);
h.insert(102);
h.delete()

console.log(h.data);