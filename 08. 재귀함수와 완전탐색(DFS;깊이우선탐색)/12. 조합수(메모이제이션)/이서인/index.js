function solution(n, r) {
  let answer = [];
  function DFS(n, r) {
    if (r === 0 || n === r) return 1;
    return DFS(n - 1, r -1) + DFS(n - 1, r)
  }
  answer = DFS(n, r)
  return answer;
}

//console.log(solution(5, 3));
console.log(solution(33, 19));