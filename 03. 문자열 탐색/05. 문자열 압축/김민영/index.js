function solution(s) {
  let answer = '';
  let cnt = 1;

  for (i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt++;
    } else {
      answer += s[i - 1];

      if (cnt > 1) {
        answer += cnt;
      }

      cnt = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSEKKK';
console.log(solution(str));
