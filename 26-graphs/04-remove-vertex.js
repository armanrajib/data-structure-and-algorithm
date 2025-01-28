class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // addVertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // addEdge
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // removeEdge
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }

  // removeVertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph;

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");
graph.addVertex("New York");

graph;

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Los Angeles", "New York");

graph;

// graph.removeEdge("Tokyo", "Dallas");
// graph.removeEdge("Los Angeles", "New York");
// graph.removeEdge("Tokyo", "Hong Kong");
// graph.removeEdge("Dallas", "Aspen");

graph;

graph.removeVertex("Tokyo");
graph;

graph.removeVertex("Los Angeles");
graph;

graph.removeVertex("Dallas");
graph;
