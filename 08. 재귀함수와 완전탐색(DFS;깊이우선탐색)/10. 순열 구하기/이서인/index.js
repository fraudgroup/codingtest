function solution(m, arr) {
  let answer = [];

  function DFS(index, part = "") {
    if (part.length > 1 && part[0] === part[1]) return;
    if (index === m) return part && answer.push(part);
    arr.forEach(el => {
      DFS(index + 1, part + el)
    })
  }
  DFS(0, "")
  return answer.join("\n") + "\n" + answer.length;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
