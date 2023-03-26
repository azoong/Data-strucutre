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
        
        let trickle_node_index = 0 

        while (this.has_greater_child(trickle_node_index)){
            larger_child_index = this.calculate_larger_child_index(trickle_node_index)
        }
        [this.data[trickle_node_index], this.data[larger_child_index] ] =
        [this.data[larger_child_index], this.data[trickle_node_index] ]

        trickle_node_index = larger_child_index
    }

    has_greater_child(index){
        this.data[this.left_child_index(index)] && this.data[this.left_child_index(index)] > this.data[index] ||
        this.data[this.right_child_index(index)] && this.data[this.left_child_index(index)] > this.data[index]
    }

    calculate_larger_child_index(index){
        if (!this.data[this.right_child_index(index)]){
            return this.left_child_index(index)
        }
        if( this.data[this.right_child_index(index)] > this.data[this.left_child_index(index)]){
            return this.right_child_index(index)
        }else{
            return this.left_child_index(index)
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