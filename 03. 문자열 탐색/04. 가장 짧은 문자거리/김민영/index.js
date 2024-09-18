function solution(s, t) {
  let answer = [];
  let p = 100;

  for (i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    answer[i] = p;
  }

  p = 100;

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    answer[i] = Math.min(answer[i], p);
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
