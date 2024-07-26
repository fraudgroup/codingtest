function solution(s) {
  let answer = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      answer += s[i - 1];
      if (count > 1) {
        answer += count;
      }
      count = 1; // count 초기화
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
