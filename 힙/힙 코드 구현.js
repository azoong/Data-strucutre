class Heap {
    constructor() {
        this.data = []
    }
    root_node() {
        return this.data[0]
    }
    last_node() {
        return this.data[this.data.length - 1]
    }
    left_child_index(index){
        return index*2 +1
    }
    right_child_index(index){
        return index*2 +2
    }
    parent_index(index){
        return parseInt((index-1)/ 2)
    }
    
    insert(value){
        this.data.push(value)

        let newNode_index = this.data.length-1
        while(newNode_index > 0 && this.data[newNode_index] > this.data[this.parent_index(newNode_index)]){
            [this.data[newNode_index], this.data[this.parent_index(newNode_index)] ] =
            [this.data[this.parent_index(newNode_index)], this.data[newNode_index] ]

            newNode_index = this.parent_index(newNode_index)
        }
    }
    delete(){
        this.data[0] = this.data.pop()
        let index = 0

        while(this.data[this.large_childIndex(index)] > this.data[index]){
            [this.data[this.large_childIndex(index)] , this.data[index]] =
            [this.data[index], this.data[this.large_childIndex(index)]]

            // console.log(this.large_childIndex(index))
            index = this.large_childIndex(index) ;
            console.log(index)
        }

    }
    large_childIndex(index){
        if(this.data[this.right_child_index(index)] !== undefined && this.data[this.right_child_index(index)]  >this.data[this.left_child_index(index)]){
            console.log('rightlargeindex', this.right_child_index(index))
            return this.right_child_index(index)
        }else if(this.data[this.left_child_index(index)] !== undefined && this.data[this.left_child_index(index)]  >this.data[this.right_child_index(index)]){
            console.log('left largeindex', this.left_child_index(index))
            return this.left_child_index(index)
        }else{
            return 
        }
    }
}

let h = new Heap()
h.insert(100)
h.insert(88)
h.insert(25)
h.insert(87)
h.insert(16)
h.insert(8)
h.insert(12)
h.insert(86)
h.insert(50)
h.insert(2)
h.insert(15)
h.insert(3)
h.insert(102)
h.delete()




console.log(h.data)