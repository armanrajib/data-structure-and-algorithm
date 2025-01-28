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
graph;

graph.addEdge("Tokyo", "Hong Kong");
graph;

graph.addEdge("Dallas", "Aspen");
graph;

graph.addEdge("Los Angeles", "New York");
graph;
