function solution(s) {
  let answer;

  if (s.length % 2 === 0) {
    let start = s.length / 2 - 1;
    answer = s.slice(start, start + 2);
  } else {
    let start = Math.floor(s.length / 2);
    answer = s.slice(start, start + 1);
  }

  return answer;
}
console.log(solution("study"));
