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
}

let g = new Graph();

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
