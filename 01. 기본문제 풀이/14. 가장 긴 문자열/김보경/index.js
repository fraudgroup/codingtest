function solution(s) {
  let answer = "";

  let arr = [...s].map((el) => el.length);
  answer = Math.max(...arr);

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
