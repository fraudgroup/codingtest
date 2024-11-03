function solution(s) {
  let answer;
  const stack = [];
  for (let char of s) {
    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      const right = stack.pop();
      const left = stack.pop();

      switch (char) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(left / right);
          break;
      }
    }
  }
  return stack.pop();
}

let str = "352+*9-";
console.log(solution(str));
