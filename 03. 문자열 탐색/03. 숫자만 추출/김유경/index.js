function solution(str) {
  const MAX_SIZE = 100000000;
  let answer = parseInt(str.replace(/[^0-9]/g, ""));

  return answer > MAX_SIZE ? MAX_SIZE : answer;
}

let str = "g0en2T0s8eSoft";
let soBig = "abc1234567890def";

console.log(solution(str)); // 208
console.log(solution(soBig)); // 12345678
