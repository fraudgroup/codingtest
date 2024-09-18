function solution(s) {
  let answer = "YES";
  // 알파벳 이외의 문자는 무시
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  let n = s.length;

  for (let i = 0; i < n / 2; i++) {
    if (s[i] !== s[n - i - 1]) answer = "NO";
    break;
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
