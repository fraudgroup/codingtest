function solution(s) {
  let stack = [];

  for (const el of s) {
    if (el === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(el);
    }
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
