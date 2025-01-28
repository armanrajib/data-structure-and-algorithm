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
}

const graph = new Graph();
graph;

graph.addVertex("Tokyo");
graph;

graph.addVertex("Dallas");
graph;

graph.addVertex("Aspen");
graph;

graph.addVertex("Hong Kong");
graph;

graph.addVertex("Los Angeles");
graph;

graph.addVertex("New York");
graph;
