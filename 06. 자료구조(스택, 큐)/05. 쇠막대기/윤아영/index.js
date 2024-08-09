function solution(s) {
  let answer = 0;
  const bars = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      bars.push(s[i]);
      continue;
    }

    bars.pop();

    if (s[i - 1] === "(") {
      answer += bars.length;
      continue;
    }

    answer += 1;
  }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a)); // 17
let b = "(((()(()()))(())()))(()())";
console.log(solution(b)); // 24
