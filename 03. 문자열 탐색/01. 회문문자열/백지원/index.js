function solution(s) {
  let answer = "YES";
  let n = s.length;

  s = s.toLowerCase();

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - i - 1]) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
