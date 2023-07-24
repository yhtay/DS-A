// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2)
        } else {
            this.adjacencyList[v1] = [v2]
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1)
        } else {
            this.adjacencyList[v2] = [v1]
        }
    }

    removeEdge(v1, v2) {
        if (this.this.adjacencyList[v1]) {
            this.adjacencyList[v1].filter(element => (
                element !== v2
            ))
        }
        if (this.this.adjacencyList[v2]) {
            this.adjacencyList[v2].filter(element => (
                element !== v1
            ))
        }
    }

    removeVertex (vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList

        const dfs = (vertex) => {
            if (!vertex) return null;
            result.push(vertex)
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        }
        dfs(start)
        return result;
    }

    depthFirstIterative(start) {
        const stack = [start]
        const result = [];
        const visited = {};
        let currVertex

        visited[start] = true;

        while (stack.length > 0) {
            console.log("stack: ", stack)
            currVertex = stack.pop()
            result.push(currVertex)

            this.adjacencyList[currVertex].forEach(neighbor => {

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// console.log(g.depthFirstRecursive("A"))
console.log(g.depthFirstIterative("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
