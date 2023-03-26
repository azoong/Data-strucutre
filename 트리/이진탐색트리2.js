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
        if(value > node.value){
            if(!node.rightChild){
                node.rightChild = new TreeNode(value)
            }else{
                this.insert(value, node.rightChild)
            }
        }else if(value < node.value){
            if(!node.leftChild){
                node.leftChild = new TreeNode(value)
            }else{
                this.insert(value, node.leftChild)
            }
        }
    }
    //삭제
    delete(value, node){
        if(node == null) return null
        
        else if(value>node.value){
            node.rightChild  = this.delete(value, node.rightChild)
            return node
        }else if(value<node.value){
            node.leftChild = this.delete(value, node.leftChild)
            return node
        }else{
            if(!node.rightChild) return node.leftChild
            else if(!node.leftChild) return node.rightChild
            else{
                node.rightChild = this.lift(node.rightChild, node)
                return node
            }
        }
    }
    //노드 이동
    lift(node, nodeToDelete){
        //후속자 노드찾기
        //왼쪽 자식노드가 없을때 까지 재귀
        if(node.leftChild){
            node.leftChild = this.lift(node.leftChild, nodeToDelete)
            return node
        }else{
            //왼쪽 자식노드가 더이상 없으면 그노드를 삭제한 노드대신 채워준다.
            nodeToDelete.value = node.value
            //후속자 노드가 빠진 자리는 오른쪽 자식노드를 대신해준다. 
            return node.rightChild 
        }
    }

    inorder(node){
        if(node){
            this.inorder(node.leftChild)
            process.stdout.write(node.value + ' ');
            this.inorder(node.rightChild)
        } 
    }
    traverseAndPrint(node) {
        if (node === null) {
            return;
        }
        this.traverseAndPrint(node.leftChild);
        process.stdout.write(node.value + ' ');
        this.traverseAndPrint(node.rightChild);
    }

    largeValue_search(node){
        if(node.rightChild){
            return this.largeValue_search(node.rightChild)
        }else{
            return node.value
        }
    }


}

const node1 = new TreeNode(25)
const node2 = new TreeNode(75)
const root = new TreeNode(50, node1, node2)

// console.log(root)

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
// root.inorder(root)
root.inorder(root) 
// root.traverseAndPrint(root)
// console.log(root.delete(61, root))
// console.log(root.search(75,root))
// console.log("zzzz", root.rightChild)
// console.log(root.search(61,root))
console.log('\n' + root.largeValue_search(root))
