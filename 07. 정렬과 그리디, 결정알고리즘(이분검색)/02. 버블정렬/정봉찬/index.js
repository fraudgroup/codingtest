/*
✅문제 제목: 버블정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-13

💡문제 분석 요약
  - N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
  - 정렬하는 방법은 버블정렬입니다.

💡알고리즘 설계
  - 배열의 길이 - 1 만큼 반복하는 반복문을 선언한다.
  - pointer1, pointer2 변수를 선언하고 각각 0, 1로 초기화한다.
  - while 중첩 반복문으로 (pointer2 < 배열의 길이 - i)의 조건으로 반복한다.
  - pointer2가 더 작다면 [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]]으로 스왑한다.
  - pointer1++, pointer2++한다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let pointer1 = 0;
    let pointer2 = 1;

    while (pointer2 < arr.length - i) {
      if (arr[pointer2] < arr[pointer1]) {
        [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
      }

      pointer1++;
      pointer2++;
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
