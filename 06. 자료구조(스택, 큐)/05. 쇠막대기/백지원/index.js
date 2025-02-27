function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
