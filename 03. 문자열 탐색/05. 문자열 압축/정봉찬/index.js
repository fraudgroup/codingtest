/*
✅문제 제목: 문자열 압축

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-19

💡문제 분석 요약
  - 같은 문자가 연속으로 반복될 때 반복되는 문자 바로 오른쪽에 반복 횟수를 표기한다.
  - 반복 횟수가 1인 경우 생략한다.

💡알고리즘 설계
  - 반복 횟수를 저장할 count 변수를 만든다.
  - 반복문을 돌면서 같은 문자가 반복되면 count를 증감한다.
  - 이전 인덱스와 다른 문자가 나오면 문자를 저장하고 count가 1이 아닐 경우 count를 저장하고 count를 1로 초기화한다.
*/

function solution(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    const pre = s[i - 1] || '';
    const cur = s[i];

    if (pre === cur) {
      count++;
      continue;
    }

    if (count > 1) {
      answer += count;
    }

    answer += cur;

    count = 1;
  }

  return answer;
}

let str = 'KKHSSSSSSSE';
let str2 = 'KKHSSSSSSSEKKK';
console.log(solution(str));

/*
✅문제 풀이 날짜: 2024-07-19

💡문제 분석 요약
  - 같은 문자가 연속으로 반복될 때 반복되는 문자 바로 오른쪽에 반복 횟수를 표기한다.
  - 반복 횟수가 1인 경우 생략한다.

💡알고리즘 설계
  - 반복 횟수를 저장할 count 변수를 만든다.
  - 반복문을 돌면서 같은 문자가 반복되면 count를 증감한다.
  - 이전 인덱스와 다른 문자가 나오면 문자를 저장하고 count가 1이 아닐 경우 count를 저장하고 count를 1로 초기화한다.
  - 반복문 종료 후 count가 1보다 크면 answer에 count를 저장한다.
*/

function solution2(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    const pre = s[i - 1] || '';
    const cur = s[i];

    if (pre === cur) {
      count++;
      continue;
    }

    if (count > 1) {
      answer += count;
    }

    answer += cur;

    count = 1;
  }

  if (count > 1) {
    answer += count;
  }

  return answer;
}

console.log(solution2(str));
console.log(solution2(str2));
