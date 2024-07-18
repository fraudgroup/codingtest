function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (answer > c) {
    answer = c;
  }

  return answer;
}

console.log(solution(2, 5, 1));

// const input = require("fs")
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// let solution = input.reduce((acc, el) => acc + el, 0);

// console.log(solution);
