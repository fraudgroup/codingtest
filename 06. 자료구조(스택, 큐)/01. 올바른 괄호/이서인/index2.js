function solution(s) {
  let stack = [];

  for (let el of s) {
    if (el === "(") {
      stack.push(el);
    } else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()))))()))))))";
console.log(solution(a));
