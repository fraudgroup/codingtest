/*
✅문제 제목: 유효한 팰린드롬

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-16

💡문제 분석 요약
  - 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
  - 팰린드롬이면 YES, 아니면 NO를 출력한다.
  - 알파벳만 가지고 검사하며 대소문자를 구분하지 않는다. 알파벳 이외의 문자들은 무시한다.

💡알고리즘 설계
  - 매개변수로 넘어온 문자열을 소문자 변환 또는 대문자 변환한다.
  - replaceAll을 통해서 알파벳만 남긴다.
  - 배열로 변환 후 reverse를 통해서 비교한다.
*/

function solution(s) {
  let answer = 'YES';

  const formattedStr = s.toLowerCase().replaceAll(/[^a-z]/g, '');
  const reversedStr = [...formattedStr].reverse().join('');

  if (formattedStr !== reversedStr) {
    answer = 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
