function solution(s) {
  let answer = "";

  s.forEach((el) => {
    if (el.length > answer.length) {
      answer = el;
    }
  });

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
