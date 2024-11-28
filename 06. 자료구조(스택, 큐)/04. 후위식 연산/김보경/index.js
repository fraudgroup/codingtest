function solution(s) {
  let stack = [];

  [...s].forEach((el) => {
    if (!isNaN(+el)) stack.push(+el);
    else if (isNaN(+el)) {
      let a = stack[stack.length - 1];
      stack.pop();
      let b = stack[stack.length - 1];
      stack.pop();

      if (el === "+") {
        stack.push(a + b);
      } else if (el === "-") {
        stack.push(b - a);
      } else if (el === "*") {
        stack.push(a * b);
      } else {
        stack.push(a / b);
      }
    }
  });

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
