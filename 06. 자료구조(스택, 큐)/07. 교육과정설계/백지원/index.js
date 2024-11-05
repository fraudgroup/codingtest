function solution(need, plan) {
  let answer = "YES";
  const queue = Array.from(need);
  for (let char of plan) {
    if (queue.includes(char)) {
      if (char != queue.shift()) return "NO";
    }
  }

  if (queue.length > 0) return "NO";

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
