class TreeNode {
    constructor(val,left=null,right=null){
        this.value = val
        this.leftChild = left
        this.rightChild = right
    }
    test(name){
        if(name.leftchild == null){
            return name.rightChild
        }else if(name.rightChild == null){
            return name.leftChild
        }
    }
}

a = new TreeNode(5)
console.log(a.test(a))