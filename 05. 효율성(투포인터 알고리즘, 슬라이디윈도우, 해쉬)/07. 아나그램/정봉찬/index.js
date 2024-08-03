/*
✅문제 제목: 아나그램

✅문제 유형: 효율성(해쉬)

✅문제 풀이 날짜: 2024-08-02

💡문제 분석 요약
  - 두 문자열이 알파벳의 나열 순서는 다르지만 구성이 일치하면 두 단어는 아나그램이다.
  - 아나그램이면 "YES"를 출력하고, 아니면 "NO"를 출력한다.

💡알고리즘 설계
  - 두 문자열의 알파벳 수를 담을 Map 자료구조 변수(hash1, hash2)를 각각 선언한다.
  - 두 문자열을 각각 반복문 돌면서 hash에 알파벳 수를 넣는다.
  - 하나의 해쉬를 기준으로 for ... of 돌면서 알파벳을 다른 해쉬에서 찾아서 하나라도 수가 일치하지 않으면 아나그램이 아니다.
*/

function solution(str1, str2) {
  let answer = 'YES';

  const hash1 = new Map();
  const hash2 = new Map();

  [...str1].forEach((str) => {
    hash1.set(str, (hash1.get(str) || 0) + 1);
  });

  [...str2].forEach((str) => {
    hash2.set(str, (hash2.get(str) || 0) + 1);
  });

  for (const [alphabet, count] of hash1) {
    if (hash2.get(alphabet) !== count) {
      return 'NO';
    }
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
let a2 = 'abaCC';
let b2 = 'Caaab';
console.log(solution(a, b)); // YES
console.log(solution(a2, b2)); // NO
