function solution(n) {
  let answer = [];

  function DFS(el, part = "") {
    if (el > n) return part && answer.push(part);

    DFS(el + 1, part + el);

    DFS(el + 1, part);
  }
  DFS(1);

  return answer.join('\n');
}

console.log(solution(3));
