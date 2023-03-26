// class Node
//     attr_accessor :DataTransfer, :next_node, :previous_node

//     def initialize(data)
//         @data = data
//     end
// end

// class DoublyLinkedList
//     attr_accessor :first_node, :last_node

//     def initialize(first_node=nil, last_node=nil)
//         @first_node = first_node
//         @last_node = last_node
//         end

//         def insert_at_end(value)
//             new_node = Node.new(value)

//             if !first_node
//                 @first_node = new_node
//                 @last_node = new_node
//             else
//                 new_node.previous_node = @last_node
//                 @last_node.next_node = new_node
//                 @last_node = new_node
//             end
//         end

//         def remove_from_front
//             removed_node = @first_node
//             @frist_node = @first_node.next_node
//             retrun removed_node
//         end

//     end

// class Queue
//     attr_accessor :data

//     def initialize
//         @data = DoublyLinkedList.new
//     end

//     def enque(element)
//         @data.insert_at_end(element)
//     end

//     def deque 
//         removed_node = @data.remove_from_front
//         return removed_node.data
//     end

//     def read
//         return nil unless @data.first_node
//         return @data.first_node.data
//     end
// end

//이중 연결리스트 기반 큐 만들기



class Node {
    constructor(data) {
        this.data = data;
        this.next_node = null;
        this.previous_node = null;
    }
}

class DoublyLinkedList {
    constructor(first_node = null, last_node = null) {
        this.first_node = first_node;
        this.last_node = last_node;
    }

    insert_at_end(value) {
        const new_node = new Node(value);

        if (!this.first_node) {
            this.first_node = new_node;
            this.last_node = new_node;
        } else {
            new_node.previous_node = this.last_node;
            this.last_node.next_node = new_node;
            this.last_node = new_node;
        }
    }

    remove_from_front() {
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

class Queue {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    enque(element) {
        this.data.insert_at_end(element);
    }

    deque() {
        const removed_node = this.data.remove_from_front();
        return removed_node.data;
    }

    read() {
        const reda_node = this.data.Print()
        return reda_node;
    }
}

//삽입과 삭제를 모두 O(1) 만에 할 수 있게 되었다.

let q = new Queue()
q.enque('one')
q.enque('two')
q.enque('three')
q.enque('four')
q.deque()

q.read()
console.log(q)
// console.log('2', q.data.first_node)





