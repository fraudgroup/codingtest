function solution(n, m) {
  let answer = [];

  function DFS(numbers, part = "") {
    if (numbers === m) return part && answer.push(part)
    Array.from({ length: n }, (_, i) => i + 1).forEach((el) => {
      DFS(numbers + 1, part + el)
    })
  }
  DFS(0, "");

  return answer.join("\n") + "\n" + answer.length;
}

console.log(solution(3, 2));
