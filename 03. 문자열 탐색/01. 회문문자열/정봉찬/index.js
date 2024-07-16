/*
✅문제 제목: 회문문자열

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-15

💡문제 분석 요약
  - 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
  - 회문 문자열이면 YES, 아니면 NO를 출력한다.
  - 대소문자를 구분하지 않는다.

💡알고리즘 설계
  - 문자열을 배열로 변환 후 Array.prototype.reverse()를 사용해서 거꾸로 돌린 후 문자열로 변환한다.
  - 원본 문자열과 거꾸로 돌린 문자열을 소문자 변환 또는 대문자 변환 후 비교한다.
*/

function solution(s) {
  let answer = 'YES';

  const reverse = [...s].reverse().join('');

  if (s.toUpperCase() !== reverse.toUpperCase()) {
    answer = 'NO';
  }

  return answer;
}

let str = 'goooG';
console.log(solution(str));

/*
✅문제 풀이 날짜: 2024-07-15

💡알고리즘 설계
  - 문자열의 길이만큼 반복문 돌면서 현재 인덱스(i)와 (문자열 길이 - 1 - i)를 소문자 변환 또는 대문자 변환 후 비교한다.
*/

function solution2(s) {
  let answer = 'YES';

  const LENGTH = s.length;

  for (let i = 0; i < Math.trunc(LENGTH / 2); i++) {
    const current = s[i];
    const reverse = s[LENGTH - 1 - i];
    if (current.toUpperCase() !== reverse.toUpperCase()) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

console.log('solution2: ', solution2(str));
