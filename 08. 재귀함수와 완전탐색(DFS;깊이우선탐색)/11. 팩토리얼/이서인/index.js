function solution(n) {
  function DFS(n) {
    if (n === 1) return 1;
    return n * DFS(n - 1)
  }
  return DFS(n)
}

console.log(solution(5));
