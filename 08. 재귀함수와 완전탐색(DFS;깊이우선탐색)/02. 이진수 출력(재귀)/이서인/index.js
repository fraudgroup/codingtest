function solution(n) {
  let answer = '';
  if (n > 0) {
    answer = n % 2
    n = parseInt(n / 2)
    answer = solution(n) + answer;
  }
  return answer
}

console.log(solution(16));
