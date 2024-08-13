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
// console.log(solution(a, b));

/*
✅문제 제목: 모든 아나그램

✅문제 유형: 효율성(해쉬, 투포인터, 슬라이딩 윈도우)

✅문제 풀이 날짜: 2024-08-11

💡문제 분석 요약
  - S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구한다.
  - 대소문자가 구분된다.
  - 부분문자열은 연속된 문자열이어야 한다.

💡알고리즘 설계
  - 두개의 해쉬를 매개변수로 받는 isAnagram 함수를 정의한다.
  - T문자열 해쉬가 될 tHash를 선언한다.
  - S의 부분문자열 해쉬가 될 sHash를 선언한다.
  - T문자열의 길이만큼 반복문을 돌면서 tHash에 요소를 키로 요소의 수를 값으로 담는다.
  - S문자열을 T문자열의 길이 - 1 만큼 반복문을 돌면서 sHash에 요소를 키로 요소의 수를 값으로 담는다.
  - T문자열 - 1의 길이를 시작점으로 S문자열의 길이보다 작은 조건으로 반복문을 돈다.
  - i번째 요소를 sHash에 담고 isAnagram으로 tHash와 sHash를 비교한다. isAnagram이 true면 answer를 1 더한다.
  - i - t.length번째 요소를 sHash에서 - 1하고 만약 0이라면 제거한다.

✅ 복수 성공!
*/

function solution2(s, t) {
  let answer = 0;
  const S_LENGTH = s.length;
  const T_LENGTH = t.length;

  function isAnagram(hash1, hash2) {
    if (hash1.size !== hash2.size) {
      return false;
    }

    for (const [character, count] of hash1) {
      if (hash2.get(character) !== count) {
        return false;
      }
    }

    return true;
  }

  const tHash = new Map();
  const sHash = new Map();

  for (const character of t) {
    tHash.set(character, (tHash.get(character) || 0) + 1);
  }

  for (let i = 0; i < T_LENGTH - 1; i++) {
    sHash.set(s[i], (sHash.get(s[i]) || 0) + 1);
  }

  for (let i = T_LENGTH - 1; i < S_LENGTH; i++) {
    const newChar = s[i];
    const oldChar = s[i - T_LENGTH + 1];
    sHash.set(newChar, (sHash.get(newChar) || 0) + 1);

    if (isAnagram(sHash, tHash)) {
      answer++;
    }

    sHash.set(oldChar, (sHash.get(oldChar) || 1) - 1);

    if (!sHash.get(oldChar)) {
      sHash.delete(oldChar);
    }
  }

  return answer;
}

console.log(solution2(a, b)); // 3
