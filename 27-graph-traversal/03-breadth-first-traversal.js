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

  // depthFirstSearchRecursive
  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function helperDFS(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return helperDFS(neighbour);
        }
      });
    })(start);

    return result;
  }

  // depthFirstSearchIterative
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return result;
  }

  // breadthFirstSearch
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph;

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph;

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph;

console.log(graph.depthFirstSearchRecursive("A"));
console.log(graph.depthFirstSearchRecursive("B"));
console.log(graph.depthFirstSearchRecursive("C"));
console.log(graph.depthFirstSearchRecursive("D"));
console.log(graph.depthFirstSearchRecursive("E"));
console.log(graph.depthFirstSearchRecursive("F"));

console.log(graph.depthFirstSearchIterative("A"));
console.log(graph.depthFirstSearchIterative("B"));
console.log(graph.depthFirstSearchIterative("C"));
console.log(graph.depthFirstSearchIterative("D"));
console.log(graph.depthFirstSearchIterative("E"));
console.log(graph.depthFirstSearchIterative("F"));

console.log(graph.breadthFirstSearch("A"));
console.log(graph.breadthFirstSearch("B"));
console.log(graph.breadthFirstSearch("C"));
console.log(graph.breadthFirstSearch("D"));
console.log(graph.breadthFirstSearch("E"));
console.log(graph.breadthFirstSearch("F"));
