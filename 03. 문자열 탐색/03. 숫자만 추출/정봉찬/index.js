/*
✅문제 제목: 숫자만 추출

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-17

💡문제 분석 요약
  - 숫자만 추출해서 그 순서대로 자연수를 만든다.

💡알고리즘 설계
  - 정규식을 활용해서 숫자만 남긴다.
  - parseInt 메서드를 활용해서 자연수로 변환한다.
*/

function solution(str) {
  let answer = '';

  answer = parseInt(str.replaceAll(/[^0-9]/g, ''));

  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
