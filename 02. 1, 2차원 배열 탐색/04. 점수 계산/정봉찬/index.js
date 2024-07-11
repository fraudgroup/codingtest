/*
✅문제 제목: 점수 계산

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-11

💡문제 분석 요약
  - 문제를 맞힌 경우 1, 틀린 경우 0
  - 문제를 연속으로 맞힐 때 K번째 연속으로 맞은 문제는 K점을 받는다.

💡알고리즘 설계
  - 가산점 변수를 만들어서 문제를 맞힐 때 1 * 가산점으로 점수를 더한다.
  - 오답일 때 가산점을 1로 초기화한다.
*/

function solution(arr) {
  let answer = 0;
  let point = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      point = 1;
      continue;
    }
    answer += 1 * point++;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
