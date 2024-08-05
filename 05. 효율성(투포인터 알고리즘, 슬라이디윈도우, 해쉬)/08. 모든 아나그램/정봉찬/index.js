/*
✅문제 제목: 모든 아나그램

✅문제 유형: 효율성(해쉬, 투포인터, 슬라이딩 윈도우)

✅문제 풀이 날짜: 2024-08-03

💡문제 분석 요약
  - S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구한다.
  - 대소문자가 구분된다.
  - 부분문자열은 연속된 문자열이어야 한다.

💡알고리즘 설계
  - S문자열의 부분문자열을 담을 해쉬 변수 hash1, T문자열을 담을 해쉬 변수 hash2를 Map 자료구조로 선언한다.
  - T문자열을 순회하면서 hash2에 문자를 key로 문자의 개수를 value로 담는다.
  - 

❌ 일주일 뒤에 다시 풀어보자...
*/

function solution(s, t) {
  let answer = 0;

  // const hash1 = new Map();
  // const hash2 = new Map();

  // const slidingSize = t.length;

  // for (const alphabet of t) {
  //   hash1.set(alphabet, (hash1.get(alphabet) || 0) + 1);
  // }

  // for (let i = 0; i < slidingSize; i++) {
  //   hash2.set(s[i], (hash2.get(s[i]) || 0) + 1);
  // }

  // let sp = 0;
  // for (let ep = slidingSize; ep < s.length; ep++) {
  //   let isAnagram = true;

  //   for (const [alphabet, count] of hash2) {
  //     if (hash1.get(alphabet) !== count) {
  //       isAnagram = false;
  //       break;
  //     }
  //   }

  //   hash2.set(s[ep], hash2.get(s[ep]) + 1);

  //   console.log('sp: ', sp);
  //   console.log('hash1: ', hash1);
  //   console.log('hash2: ', hash2);
  //   console.log('isAnagram: ', isAnagram);

  //   if (hash2.get(s[sp]) === 0) {
  //     hash2.delete(s[sp]);
  //   } else {
  //     hash2.set(s[sp], hash2.get(s[sp]) - 1);
  //   }

  //   sp++;

  //   if (isAnagram) {
  //     answer++;
  //   }
  // }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
