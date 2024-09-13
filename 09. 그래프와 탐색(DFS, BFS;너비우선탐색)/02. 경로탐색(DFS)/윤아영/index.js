function solution(n, arr) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (const [s, e] of arr) {
    graph[s][e] = 1;
  }

  const DFS = (node, route) => {
    if (graph[node][n] === 1) {
      answer++;
    }

    for (let i = 1; i < n; i++) {
      if (route.includes(i)) continue;
      if (graph[node][i] === 0) continue;

      DFS(i, [...route, i]);
    }
  };

  DFS(1, [1]);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
