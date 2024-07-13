/*
✅문제 제목: 봉우리

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-13

💡문제 분석 요약
  - 각 격자의 값이 상하좌우 숫자보다 클 때 봉우리.
  - 격자의 가장자리는 0으로 계산.

💡알고리즘 설계
  - [0, 2]의 봉우리 여부 확인하는 방법: [0, 1], [0, 3], [1, 2]의 값을 확인.
  - 상하좌우 값을 구해서 현재 봉우리와 값을 비교.
*/

function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const current = arr[i][j];
      const top = arr[i - 1]?.[j] || 0;
      const down = arr[i + 1]?.[j] || 0;
      const left = arr[i][j - 1] || 0;
      const right = arr[i][j + 1] || 0;

      if (current !== Math.max(current, top, down, left, right)) {
        continue;
      }

      answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
