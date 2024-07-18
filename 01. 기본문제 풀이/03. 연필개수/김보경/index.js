function solution(n) {
  let answer;

  let dozen = 12;
  answer = Math.ceil(n / dozen);

  return answer;
}

console.log(solution(178));
