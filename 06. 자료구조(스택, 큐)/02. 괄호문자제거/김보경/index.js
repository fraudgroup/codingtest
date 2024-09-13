function solution(s) {
  let stack = [];

  [...s].forEach((el) => {
    if (el === "(") stack.push(el);
    else if (el === ")") stack.pop();
    else if (stack[stack.length - 1] !== "(") stack.push(el);
  });

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
