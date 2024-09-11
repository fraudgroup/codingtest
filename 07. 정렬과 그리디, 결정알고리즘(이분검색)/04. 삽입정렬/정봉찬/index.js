/*
✅문제 제목: 삽입정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-14

💡문제 분석 요약
  - N개의 숫자가 입력되면 오름차순으로 정렬하여 출력한다.
  - 삽입정렬을 활용한다.

💡알고리즘 설계
  - i = 1 부터 배열의 길이만큼 반복문을 선언한다. 증감식은 i++
  - j = i - 1부터 0 보다 크거나 같은 조건으로 중첩 반복문을 선언한다. 증감식은 j--
  - 중첩 반복문에서 arr[j]의 값과 arr[j + 1]의 값을 비교해서 arr[j + 1]이 작다면 arr[j]와 arr[j + 1]의 값을 교체한다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j + 1]) {
        continue;
      }

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
