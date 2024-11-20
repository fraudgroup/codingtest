function solution(n) {
  let answer = [];

  function DFS(n) {
    if (n === 0) return;
    DFS(Math.floor(n / 2));
    answer.push(n % 2);
  }
  DFS(n);
  return answer.join("");
}

console.log(solution(11));
