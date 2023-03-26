//이중연결리스트 
class DoublyLinkedList {
    constructor(first_node = null, last_node = null) { 
        this.first_node = first_node;
        this.last_node = last_node;
    }

    insert_at_end(value) {
        const new_node = new Node(value);
		
        if (!this.first_node) {//첫노드가 없음면 새로 추가된 값이 첫번째와,마지막 
            this.first_node = new_node;
            this.last_node = new_node;
        } else { //그렇지 않으면 새로들어온 노드가 마지막으로전환되고, 이전 노드는 마지막 노드의 이저 노드가 된다.
            new_node.previous_node = this.last_node;
            this.last_node.next_node = new_node;
            this.last_node = new_node;
        }
    }

    remove_from_front() { //삭제할때는 첫노드를 삭제해주고 첫노드의 다음 노드를 첫 노드로지정해 준다.
        const removed_node = this.first_node;
        this.first_node = this.first_node.next_node;
        return removed_node;
    }
    Print() {
        let current_node = this.first_node;

        while (current_node) {
            console.log(current_node.data);
            current_node = current_node.next_node;
        }
    }
}