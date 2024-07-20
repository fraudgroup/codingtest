function solution(str) {
  let answer = Number(str.replace(/[^0-9]/g, ""));

  while (answer > 100000000) {
    answer = Number(answer.toString().slice(0, -1));
  }

  return answer;
}

let str = "g0en2T0s8eSoft";
let soBig = "abc1234567890def";

console.log(solution(str)); // 208
console.log(solution(soBig)); // 12345678
