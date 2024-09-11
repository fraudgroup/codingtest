function solution(n, r) {
  let dy = Array.from({length: 35}, () => new Array(35).fill(0));

  const DFS=(n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r ===0) return 1;
    return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)
  }

  return DFS(n, r);
}

console.log(solution(5, 3));
console.log(solution(33, 19));
