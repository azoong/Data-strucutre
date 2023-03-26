class Heap{
    constructor(){
        this.data = []
    }
    root_node(){
        return this.data[0]
    }
    last_node(){
        return this.data[this.data.length-1]
    }

    left_child_index(index){
        return index*2 +1
    }
    right_child_index(index){
        return index*2 +2
    }

    parent_index(index){
        return parseInt((index-1) / 2)
    }

    insert(value){
        this.data.push(value)

        let new_node_index = this.data.length -1

        while (new_node_index > 0 && this.data[new_node_index] > this.data[this.parent_index(new_node_index)]){
            //부모인덱스와 자식인덱스 자리를 바꾼다.
            [this.data[this.parent_index(new_node_index)], this.data[new_node_index]] = 
            [this.data[new_node_index], this.data[this.parent_index(new_node_index)]]
            //루프를 돌리기위해 new_node_index를 부모인덱스로 업데이트 해준다.
            new_node_index = this.parent_index(new_node_index)
        }
    }

    delete(){
        this.data[0] = this.data.pop()
        let index = 0;  
        let child_index = null;
        while (this.data[this.child_largeIndex(index)]>this.data[index]){
            child_index = this.child_largeIndex(index);

            [this.data[child_index], this.data[index]] =
            [this.data[index], this.data[child_index]] ;

            index = child_index;
        }
      
    }
    child_largeIndex(index){
        if(this.data[this.right_child_index(index)] !== undefined && this.data[this.left_child_index(index)] !== undefined ){
            if(this.data[this.left_child_index(index)] > this.data[this.right_child_index(index)]){
                return this.left_child_index(index)
            }else if(this.data[this.right_child_index(index)] > this.data[this.left_child_index(index)]){
                return this.right_child_index(index)
            }
        }else if(this.data[this.right_child_index(index)] == undefined){
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
h.delete()

console.log(h.data)

arr= [1,2,3]
arr.reduce()