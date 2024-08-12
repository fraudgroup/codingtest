/*
✅문제 제목: 선택정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-12

💡문제 분석 요약
  - N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
  - 정렬하는 방법은 선택정렬입니다.

💡알고리즘 설계
  - answer의 길이 - 1 만큼 반복문을 돈다.
  - 반복문 안에서 가장 작은 값을 저장할 변수 minValue을 선언하고 현재 인덱스의 요소로 초기화한다.
  - 반복문 안에서 최소값 인덱스를 저장할 변수 minIndex를 선언하고 현재 인덱스로 초기화한다.
  - 반복문 안에서 현재 인덱스 + 1부터 answer의 길이만큼 중첩 반복문을 돈다.
  - 중첩 반목문에서 minValue, minIndex를 계속 갱신한다.
  - 중첩 반복문이 종료되면 현재 인덱스 값과 minValue 인덱스 값을 치환한다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    let minValue = answer[i];
    let minIndex = i;

    for (let j = i + 1; j < answer.length; j++) {
      if (minValue <= answer[j]) {
        continue;
      }

      minValue = answer[j];
      minIndex = j;
    }

    answer[minIndex] = answer[i];
    answer[i] = minValue;
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
