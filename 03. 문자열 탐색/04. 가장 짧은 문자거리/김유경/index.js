function solution(s, t) {
  let answer = new Array(s.length).fill(Infinity);
  let tIndex = -1;

  // 왼쪽에서 오른쪽으로 최소거리 계산
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) tIndex = i;
    if (tIndex !== -1) {
      answer[i] = Math.abs(i - tIndex);
    }
  }

  // 오른쪽에서 왼쪽으로 최소거리 계산
  tIndex = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) tIndex = i;
    if (tIndex !== -1) {
      answer[i] = Math.min(answer[i], Math.abs(i - tIndex));
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
