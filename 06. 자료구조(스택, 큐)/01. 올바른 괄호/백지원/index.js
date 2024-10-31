function solution(s) {
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
