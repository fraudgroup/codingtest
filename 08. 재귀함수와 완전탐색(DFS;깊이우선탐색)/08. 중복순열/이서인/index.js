function solution(n, m) {
  let answer = [];

  function DFS(depth, part = "") {
    if (depth === m) return part && answer.push(part)
    Array.from({ length: n }, (_, i) => i + 1).forEach((el) => {
      DFS(depth + 1, part + el)
    })

  }
  DFS(0, "");

  return answer.join("\n") + "\n" + answer.length;
}

console.log(solution(3, 2));
