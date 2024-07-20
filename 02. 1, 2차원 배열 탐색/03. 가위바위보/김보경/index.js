function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    let sum = a[i] + b[i];
    let winner = a[i] > b[i] ? "A" : "B";

    if (a[i] === b[i]) {
      answer.push("D");
    } else if (sum === 4) {
      answer.push(a[i] > b[i] ? "B" : "A");
    } else {
      answer.push(winner);
    }
  }

  return answer.join("");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
