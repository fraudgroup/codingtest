function solution(str) {
  let answer = "";
  for (let s of str) {
    if (!isNaN(s) && s != " ") answer += s;
  }

  return parseInt(answer, 10);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
