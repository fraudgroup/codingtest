function solution(s) {
  let answer = "";

  let arr = [...new Set(s)].join("");
  answer = arr;

  return answer;
}
console.log(solution("ksekkset"));
