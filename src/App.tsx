import React from "react";
import PriorityQueue from "algorithms/graph/PriorityQueue";
import Dijkstra from "algorithms/graph/Dijkstra";
import Vertex from "algorithms/graph/Vertex";
import Graph from "algorithms/graph/Graph";
import Edge from "algorithms/graph/Edge";

function App() {
  const graph = new Graph(true);

  const vertex_a = new Vertex("A");
  const vertex_b = new Vertex("B");
  const vertex_c = new Vertex("C");
  const vertex_d = new Vertex("D");
  const vertex_e = new Vertex("E");
  const vertex_f = new Vertex("F");
  const vertex_g = new Vertex("G");
  const vertex_h = new Vertex("H");

  const edge_a_b = new Edge(vertex_a, vertex_b, 1);
  const edge_b_c = new Edge(vertex_b, vertex_c, 2);
  const edge_c_d = new Edge(vertex_c, vertex_d, 3);
  const edge_d_h = new Edge(vertex_d, vertex_h, 20);
  const edge_b_d = new Edge(vertex_b, vertex_d, 1);
  const edge_h_g = new Edge(vertex_h, vertex_g, 3);
  const edge_g_h = new Edge(vertex_g, vertex_h, 1);
  const edge_g_f = new Edge(vertex_g, vertex_f, 4);
  const edge_f_g = new Edge(vertex_f, vertex_g, 3);
  const edge_e_f = new Edge(vertex_e, vertex_f, 2);
  const edge_f_e = new Edge(vertex_f, vertex_e, 3);
  const edge_e_b = new Edge(vertex_e, vertex_b, 3);
  const edge_b_e = new Edge(vertex_b, vertex_e, 3);

  graph.addVertex(vertex_a);
  graph.addVertex(vertex_b);
  graph.addVertex(vertex_c);
  graph.addVertex(vertex_d);
  graph.addVertex(vertex_e);
  graph.addVertex(vertex_f);
  graph.addVertex(vertex_g);
  graph.addVertex(vertex_h);

  graph.addEdge(edge_a_b);
  graph.addEdge(edge_b_c);
  graph.addEdge(edge_c_d);
  graph.addEdge(edge_d_h);
  graph.addEdge(edge_b_d);
  graph.addEdge(edge_h_g);
  graph.addEdge(edge_g_h);
  graph.addEdge(edge_g_f);
  graph.addEdge(edge_f_g);
  graph.addEdge(edge_e_f);
  graph.addEdge(edge_f_e);
  graph.addEdge(edge_e_b);
  graph.addEdge(edge_b_e);

  console.log(graph.printGraph());

  const dijkstra = Dijkstra(graph, vertex_a);

  return (
    <div className="App">
      <h1>Siemanko</h1>
    </div>
  );
}

export default App;
