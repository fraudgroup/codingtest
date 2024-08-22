function solution(str) {
  let answer = [];

  str.split("").forEach((el) => {
    !isNaN(+el) && answer.push(el);
  });
  answer = answer.join("");

  return +answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
