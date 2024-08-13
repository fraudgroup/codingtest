/*
✅문제 제목: Special Sort

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-13

💡문제 분석 요약
  - 음수 정수는 앞쪽에 양의 정수는 뒷쪽에 있어야 한다.
  - 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.

💡알고리즘 설계
  - ⭐️ 선택정렬
  - i = 0부터 배열의 길이 - 1 만큼을 반복하는 반복문을 선언한다.
  - j = 0부터 배열의 길이 - i - 1 만큼을 반복하는 반복문을 선언한다.
  - arr[j]의 값이 양수고 arr[j + 1]의 값이 음수면 서로 교체한다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); // [-3, -2, -6, 1, 2, 3, 5, 6]
let arr2 = [3, 2, 1, -2, -3, 6, 5, -6];
console.log(solution(arr2)); // [-2, -3, -6, 3, 2, 1, 6, 5]
