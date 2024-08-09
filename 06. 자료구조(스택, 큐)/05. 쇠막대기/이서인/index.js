function solution(s) {
  let answer = 0;
  let stack = [];

  [...s].forEach((el, index) => {
    if (el === "(") {
      stack.push(el);
    } else {
      stack.pop();
      if (s[index - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  });

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
