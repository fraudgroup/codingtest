function solution(s) {
  let stack = [];
  const REGEX = /^[0-9]$/;

  [...s].forEach((el) => {
    if (REGEX.test(el)) {
      stack.push(el * 1);
    } else {
      let a = stack.pop();
      let b = stack.pop();

      switch (el) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          stack.push(b / a);
          break;
      }
    }
  });
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));

// let answer;
// let stack = [];
// let values = [...s];
// const REGEX = /^[0-9]$/g;

// values.forEach((value) => {
//   if (!REGEX.test(value)) {
//     while (stack.length > 0 && REGEX.test(value[stack.length - 1]))
//       stack.pop();
//   } else {
//     stack.push(value);
//   }
// });
// console.log(stack);
// return answer;
