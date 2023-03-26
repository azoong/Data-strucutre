class TreeNode {
    constructor(val,left=null,right=null){
        this.value = val
        this.leftChild = left
        this.rightChild = right
    }
    //검색
    search(searchValue, node){
        //기저조건 : 노드가 없거나 찾고있던 값
        if(node == null || node.value == searchValue){
            return node
        }else if(searchValue < node.value){
            return this.search(searchValue, node.leftChild)
        }else{
            return this.search(searchValue, node.rightChild)
        }
    }
    //삽입
    insert(value, node){
        if(value < node.value){
            if(node.leftChild == null){
                //자식이 없으면 자식으로 넣어준다.
                node.leftChild = new TreeNode(value)
            }else{
                //있으면 재귀로 한번더 검색
                this.insert(value, node.leftChild)
            }
        }else if(value > node.value){
            if(node.rightChild == null){
                node.rightChild = new TreeNode(value)
            }else{
                this.insert(value, node.rightChild)
            }
        }
    }
    //삭제
    delete(value, node){
        if(node==null) return null
        
        if(value<node.value){
            node.leftChild = this.delete(value, node.leftChild)
            return node
        }
        else if(value>node.value){
            node.rightChild = this.delete(value, node.rightChild)
            return node
        }
        else{
            if(node.leftChild == null){
                return node.rightChild
            }else if(node.rightChild =null){
                return node.leftChild
            }else{
                node.rightChild = this.lift(node.rightChild, node)
                return node
            }
        }
    }
    lift(node, nodeToDelete){
        if (node.leftChild){
            node.leftChild = lift(node.leftChild, nodeToDelete)
            return node
        }else{
            nodeToDelete.value = node.value
            return node.rightChild
        }
    }
}

const node1 = new TreeNode(25)
const node2 = new TreeNode(75)
const root = new TreeNode(50, node1, node2)

// console.log(root)
// console.log(root.search(25,root))
root.insert(100,root)
root.insert(10,root)
// console.log(root.search(10,root))

// console.log(root.search(25,root))
console.log(root.delete(10,root))
// console.log(root.search(25,root))