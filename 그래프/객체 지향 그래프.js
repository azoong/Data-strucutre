// class Vertex
//     attr_accessor :value, :adjacent_vertices

//     def initialize(value)
//         @value = value
//         @adjacent_vertices = []

//     end

//     def add_adjacent_vertex(vertex)
//         @adjacent_vertices << vertex
//     end

//     def dfs_traverse(vertex, visited_vertices={})
//         visited_vertices[vertex.value] = true

//         puts vertex.value

//         vertex.adjacent_vertices.each do|adjacent_vertex|
//             next if visited_vertices[adjacent_vertex.value]
//             dfs_traverse(adjacent_vertex, visited_vertices)
//         end
//     end

//     def bfs_traverse(starting_vertex)
//         queue = Queue.new

//         visited_vertices = {}
//         visited_vertices[starting_vertex.value] = true
//         queue.enqueue(starting_vertex)

//         while queue.read
//             current_vertex = queue.dequeue
//             puts current_vertex.value

//             current_vertex.adjacent_vertices.each do |adjacent_vertex|
//                 if !visited_vertices[adjacent_vertex.value]
//                     visited_vertices[adjacent_vertex.value] = true

//                     queue.enqueue(adjacent_vertex)
//                 end
//             end
//         end
//     end
// end


class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacent_vertices = [];
    }

    add_adjacent_vertex(vertex) {
        if (!this.adjacent_vertices.includes(vertex)) {
            this.adjacent_vertices.push(vertex);
            vertex.add_adjacent_vertex(this)
        }
    }

    dfs_traverse(vertex, visited_vertices = {}) {
        // 정점을 해시 테이블에 추가해 방문표시
        visited_vertices[vertex.value] = true;

        //제대로 순회하는지 확인
        console.log(vertex.value);

        // 현재 정점의 인접 정점을 순회한다.
        for (const adjacent_vertex of vertex.adjacent_vertices) {
            //이미 방문한 인접 정점은 스킵
            if (visited_vertices[adjacent_vertex.value]) {
                continue;
            }
            //인접 정점에 대해 메서드를 재귀적으로 호출
            this.dfs_traverse(adjacent_vertex, visited_vertices);
        }
    }

    bfs_traverse(starting_vertex) {
        const queue = [];
    
        const visited_vertices = {};
        visited_vertices[starting_vertex.value] = true;
        queue.push(starting_vertex);

        //큐가 빌 때 까지 실행
        while (queue.length > 0) {
            //큐에서 첫 번째 정점을 삭제해 현재 정점으로 만든다.
            const current_vertex = queue.shift();

            console.log(current_vertex.value);
            //현재 정점의 인접 정점을 순회
            for (const adjacent_vertex of current_vertex.adjacent_vertices) {
                // 아직 방문하지 않은 인접 정점이면
                if (!visited_vertices[adjacent_vertex.value]) {
                    //방문 해서 표시
                    visited_vertices[adjacent_vertex.value] = true;
                    //그 인접 정점을 큐에 추가
                    queue.push(adjacent_vertex);
                }
            }
        }
    }
}

alice = new Vertex("alice")
bob = new Vertex("bob")
fred = new Vertex("fred")
helen = new Vertex("helen")
candy = new Vertex("candy")
derek = new Vertex("derek")
gina = new Vertex("gina")
Irena = new Vertex("Irena")
elaine = new Vertex("elaine")


alice.add_adjacent_vertex(bob)
alice.add_adjacent_vertex(candy)
alice.add_adjacent_vertex(derek)
alice.add_adjacent_vertex(elaine)
bob.add_adjacent_vertex(fred)
fred.add_adjacent_vertex(helen)
helen.add_adjacent_vertex(candy)
derek.add_adjacent_vertex(elaine)
derek.add_adjacent_vertex(gina)
gina.add_adjacent_vertex(Irena)

// console.log(alice)
// console.log(bob)
// console.log(derek)
// console.log(elaine)


console.log(alice.dfs_traverse(alice))
// console.log(alice.bfs_traverse(alice))

// console.log(Irena)
