class Node {
  constructor(data) {
    this.data = data;
    this.links = [];
    this.depth = null;
  }

  setLink(node) {
    this.links.push(node);
  }
}

class Graph {
  constructor(n, edges) {
    this.nodes = [];
    for (let i = 1; i <= n; i++) {
      this.nodes.push(new Node(i));
    }
    edges.forEach((edge) => {
      this.nodes[edge[0] - 1].links.push(this.nodes[edge[1] - 1]);
      this.nodes[edge[1] - 1].links.push(this.nodes[edge[0] - 1]);
    });

    this.queue = [];
    this.numOfdeepestNodes = 0;

    // console.log(this.nodes);
  }

  dfs(node) {
    this.queue.push(node);
    node.depth = 0;
    let numOfdeepestNodes = 1;
    let deepestDepth = 0;

    while (this.queue.length !== 0) {
      const poppedNode = this.queue.shift();
      for (let i = 0; i < poppedNode.links.length; i++) {
        // let numOfdeepestNodes = 1;
        const linkedNode = poppedNode.links[i];
        if (linkedNode.depth === null) {
          this.queue.push(linkedNode);
          linkedNode.depth = poppedNode.depth + 1;
          if (deepestDepth < linkedNode.depth) {
            deepestDepth = linkedNode.depth;
            numOfdeepestNodes = 1;
            // console.log('deepest init');
          } else if (deepestDepth === linkedNode.depth) {
            numOfdeepestNodes++;
          }
        }
      }
    }
    this.numOfdeepestNodes = numOfdeepestNodes;
    // console.log('dfs end,   deepestDepth', this.deepestDepth);
  }

  getNumOfDeepestNodes() {
    this.dfs(this.nodes[0]);

    return this.numOfdeepestNodes;
  }
}

function solution(n, edge) {
  const graph = new Graph(n, edge);
  return graph.getNumOfDeepestNodes();
}