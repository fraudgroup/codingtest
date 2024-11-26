function solution(n, arr) {
  let answer = 0;
  const graph = Array.from({ length: n }, () => new Array());

  for (const [s, e] of arr) {
    graph[s].push(e);
  }

  const DFS = (index, route) => {
    if (index >= n) return;

    for (const end of graph[index]) {
      if (route.includes(end)) continue;
      if (end === 5) answer++;
      DFS(end, [...route, end]);
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
