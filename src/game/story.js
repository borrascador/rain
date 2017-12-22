// const storyEvents = require('./events.json'); is necessary for node testing
// import storyEvents from './events.json'; should be OK for Babel deployment

const storyEvents = require('../engine/events.json');

console.log(checkForCycles(storyEvents));

if (!checkForCycles(storyEvents)) {
  logChildEvents(storyEvents, 0);
}

function logChildEvents (graph, node) {
  console.log(JSON.stringify(graph[node], null, '    '));
  for (let i = 0; i < graph[node].children.length; i++) { 
    let nextNode = graph[node].children[i].ref;
    if (graph.hasOwnProperty(nextNode)) {
      logChildEvents(graph, nextNode);
    }
  }
}

function checkChildCycles (node, graph, visited) {
  let hasCycle = false;
  let children = graph[node].children;
  for (let i=0; i < children.length; i++) {
    if (visited[children[i].ref] === true) {
      return true;
    } else {
      visited[children[i].ref] = true;
      nextNode = children[i].ref;
      if (graph.hasOwnProperty(nextNode)) { 
        hasCycle = checkChildCycles (nextNode, graph, visited);
      } else {
        console.log(`WARN: null reference ${nextNode} at node ${node}`);
      }
    }
  }
  return hasCycle;
}

function checkForCycles (graph) {
  for (var node in graph) {
    if (graph.hasOwnProperty(node)) {
      let visited = {};
      visited[node] = true;
      let hasCycle = checkChildCycles (node, graph, visited);
      if (hasCycle === true) return true;
    }
  }
  return false;
}
