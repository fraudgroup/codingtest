function solution(s) {
  let answer;

  let arr = [...new Set(s)];
  answer = arr;

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
