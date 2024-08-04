function solution(s) {
  let stack = [];

  for (const el of s) {
    if (el === "(") {
      return stack.push(1);
    } else if (el === ")") {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
let b = ")";
console.log(solution(b));
