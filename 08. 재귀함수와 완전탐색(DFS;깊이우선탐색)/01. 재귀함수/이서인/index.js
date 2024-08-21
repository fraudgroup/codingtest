function solution(n) {
  let answer = []
  function DFS(L) {
    if (L > 0) {
      answer.unshift(L)
      DFS(L - 1)
    }
  }
  DFS(n);
  console.log(answer.join(' '))
}

solution(3);