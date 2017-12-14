// const storyEvents = require('./events.json'); is necessary for node testing
// import storyEvents from './events.json'; should be OK for Babel deployment

const storyEvents = require('./events.json');

console.log(checkForCycles(storyEvents));

function logChildEvents (firstEvent) {
  firstEvent.children.forEach( (childId) => {
    let childEvent = storyEvents[childId];
    console.log(JSON.stringify(childEvent, null, '    '));
    logChildEvents(childEvent);
  });
}

function checkChildCycles (node, graph, visited) {
  let hasCycle = false;
  let children = graph[node].children;
  for (let i=0; i < children.length; i++) {
    if (visited[children[i]] === true) {
      return true;
    } else {
      visited[children[i]] = true;
      nextNode = children[i];
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
