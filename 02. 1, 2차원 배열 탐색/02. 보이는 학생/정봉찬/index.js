/*
✅문제 제목: 보이는 학생

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-09

💡문제 분석 요약
  - 앞선 index들의 값보다 큰 값일 때 count를 증가한다.

💡알고리즘 설계
  - 반복문을 돌면서 max 값을 저장해서 비교한다.
*/

function solution(arr) {
  let answer = 1;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= max) {
      continue;
    }
    max = arr[i];
    answer++;
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
