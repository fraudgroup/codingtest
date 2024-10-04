function solution(s, t) {
  let answer = [];
  let n = s.length;
  let p = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === t) p = 0;
    else p++;
    answer.push(p);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p++;
    answer[i] = Math.min(answer[i], p);
  }

  return answer.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));
