function solution(n, arr) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const visited = new Array(n + 1).fill(false);

  for (const [s, e] of arr) {
    graph[s][e] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && !visited[i]) {
        visited[i] = true;
        DFS(i);
        visited[i] = false;
      }
    }
  }

  visited[1] = true;
  DFS(1);

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
