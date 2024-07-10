/*
✅문제 제목: 가위바위보

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-10

💡문제 분석 요약
  - 가위: 1, 바위: 2, 보: 3
  - 이긴 사람 출력, 비길 경우 D 출력

💡알고리즘 설계
  - 객체로 이기는 케이스를 만든다.
  - 비기는 경우를 먼저 계산한다.
  - a의 이기는 케이스와 b의 값이 같다면 승자는 A 아닐 경우 B가 승자.
*/

const winCase = {
  1: 3,
  2: 1,
  3: 2,
};
function getWinner(a, b) {
  if (a === b) {
    return 'D';
  }

  return winCase[a] === b ? 'A' : 'B';
}
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    answer += getWinner(a[i], b[i]);
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
