class TreeNode {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.leftChild = left;
    this.rightChild = right;
  }
  //검색
  search(searchValue, node) {
    //기저조건 : 노드가 없거나 찾고있던 값
    if (node == null || node.value == searchValue) {
      return node;
    } else if (searchValue < node.value) {
      return this.search(searchValue, node.leftChild);
    } else {
      return this.search(searchValue, node.rightChild);
    }
  }
  //삽입
  insert(value, node) {
    if (value < node.value) {
      if (node.leftChild == null) {
        //자식이 없으면 자식으로 넣어준다.
        node.leftChild = new TreeNode(value);
      } else {
        //있으면 재귀로 한번더 검색
        this.insert(value, node.leftChild);
      }
    } else if (value > node.value) {
      if (node.rightChild == null) {
        node.rightChild = new TreeNode(value);
      } else {
        this.insert(value, node.rightChild);
      }
    }
  }
  //삭제
  delete(value, node) {
    if (node == null) return null;

    if (value < node.value) {
      node.leftChild = this.delete(value, node.leftChild);
      return node; // => 이 리턴이 child를 다시 연결해주는 역할을 한다.
    } else if (value > node.value) {
      node.rightChild = this.delete(value, node.rightChild);
      return node;
    } else {
      // value === node 삭제노드 찾을경우
      if (node.leftChild === null) {
        return node.rightChild;
      } else if (node.rightChild === null) {
        return node.leftChild;
      } else {
        // 삭제노드가 자식이 2개인경우 후숙자 노드
        node.rightChild = this.lift(node.rightChild, node);
        return node;
      }
    }
  }

  lift(node, nodeToDelete) {
    // 후숙자 노드 찾기
    if (node.leftChild) {
      node.leftChild = lift(node.leftChild, nodeToDelete);
      return node;
    } else {
      nodeToDelete.value = node.value; // 삭제할 노드의 값을 후숙자 노드의 값으로 교체
      return node.rightChild; // 상위 노드를 오른쪽 자식으로 연결해준다 (없다면 null 이니 상관 X)
    }
  }

  traverseAndPrint(node) {
    if (node === null) {
      return;
    }
    this.traverseAndPrint(node.leftChild);
    process.stdout.write(node.value + " ");
    this.traverseAndPrint(node.rightChild);
  }

  largeValue_search(node) {
    if (node.rightChild) {
      return this.largeValue_search(node.rightChild);
    } else {
      return node.value;
    }
  }
}

const node1 = new TreeNode(25);
const node2 = new TreeNode(75);
const root = new TreeNode(50, node1, node2);

root.insert(11,root)
root.insert(33,root)
root.insert(61,root)
root.insert(89,root)
root.insert(30,root)
root.insert(40,root)
root.insert(55,root)
root.insert(82,root)
root.insert(95,root)
root.delete(95,root)
root.delete(33,root)

// console.log(root.search(25,root))
console.log(root.delete(10, root));
console.log(root.search(25, root));
console.log(root.search(10, root));
root.traverseAndPrint(root)