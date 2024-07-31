function solution(a, b) {
  let answer = [];

  function whoWin(a, b) {
    if (a === b) return "D";
    if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2)) {
      return "A";
    }
    return "B";
  }

  for (let i = 0; i < a.length; i++) {
    result = whoWin(a[i], b[i]);
    answer.push(result);
  }

  return answer.join("\n");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
