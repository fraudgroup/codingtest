function solution(s) {
  let stack = [];
  for (let char of s) {
    if (char === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
