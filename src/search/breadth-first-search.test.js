function breadth_first_search(graph, startNode) {
  const visited = [];
  const queue = [];

  visited.push(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const s = queue.shift();

    for (const elem of graph[s]) {
      if (!visited.includes(elem)) {
        visited.push(elem);
        queue.push(elem);
      }
    }
  }

  return visited;
}

describe("Breadth First Search", () => {
  const graph = {
    A: ["B", "C"],
    B: ["D", "E", "F"],
    C: ["G"],
    D: [],
    E: [],
    F: ["H"],
    G: ["I"],
    H: [],
    I: [],
  };
  test("Should return the array ordered", () => {
    expect(breadth_first_search(graph, "A")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
    ]);
  });
});
