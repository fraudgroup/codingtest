function solution(s) {
  let stack = [];
  let answer = "";

  for (const el of s) {
    if (el === "(") {
      stack.push(el);
    }
    if (el === ")") {
      stack.pop();
      continue;
    }
    if (stack.length === 0) {
      answer += el;
    }
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
