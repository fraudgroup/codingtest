function solution(s) {
  const stack = [];

  const calculation = (operation, num1, num2) => {
    switch (operation) {
      case "+":
        return +num1 + +num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  };

  for (const char of s) {
    if (Number.isInteger(+char)) {
      stack.push(+char);
      continue;
    }

    const [num1, num2] = stack.splice(stack.length - 2, 2);

    stack.push(calculation(char, num1, num2));
  }

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
