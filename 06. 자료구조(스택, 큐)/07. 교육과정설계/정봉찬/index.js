/*
✅문제 제목: 교육과정설계

✅문제 유형: 해쉬

✅문제 풀이 날짜: 2024-08-12

💡문제 분석 요약
  - 총 과목은 A, B, C, D, E, F, G가 있다. 여기서 필수과목은 순서대로 꼭 수업계획을 짜야한다.
  - 예를 들어 C, B, A가 필수과목이면 C, B, D, A, G, E는 제대로 된 설계이지만 C, G, E, A, D, B는 잘 못 설계된 수업계획이다.
  - 수업설계가 잘 됐으면 "YES", 아니면 "NO"를 출력한다.

💡알고리즘 설계
  - ✅ 일단 해쉬로 풀어보기
  - 해쉬 변수 hash를 선언한다.
  - need와 일치 비교할 변수 myPlan을 선언하고 빈배열로 초기화한다.
  - need를 for ... of로 돌면서 Hash에 담는다.
  - plan을 반복문 돌면서 hash에 있으면 myPlan에 push한다.
  - 반복문이 끝나면 myPlan을 join하고 need와 일치 비교 후에 같으면 "YES" 아니면 "NO"를 return한다.
*/

function solution(need, plan) {
  let answer = 'YES';
  const hash = new Set();
  const myPlan = [];

  for (const subject of need) {
    hash.add(subject);
  }

  for (const subject of plan) {
    if (!hash.has(subject)) {
      continue;
    }

    myPlan.push(subject);
  }

  if (!(need === myPlan.join(''))) {
    answer = 'NO';
  }

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
let c = 'CGEADB';
console.log(solution(a, b)); // YES
console.log(solution(a, c)); // NO

/*
✅문제 제목: 교육과정설계

✅문제 유형: 큐

✅문제 풀이 날짜: 2024-08-12

💡문제 분석 요약
  - 총 과목은 A, B, C, D, E, F, G가 있다. 여기서 필수과목은 순서대로 꼭 수업계획을 짜야한다.
  - 예를 들어 C, B, A가 필수과목이면 C, B, D, A, G, E는 제대로 된 설계이지만 C, G, E, A, D, B는 잘 못 설계된 수업계획이다.
  - 수업설계가 잘 됐으면 "YES", 아니면 "NO"를 출력한다.

💡알고리즘 설계
  - 매개변수 need를 배열로 변환한 needArr 변수를 선언한다.
  - plan을 반복문 돌면서 현재 인덱스의 요소가 needArr[0]와 일치하면 needArr을 shift한다.
  - 반복문을 다 돌았을 때 needArr.length가 0이면 "YES" 아니면 "NO"를 출력한다.
*/

function solution2(need, plan) {
  let answer = 'YES';
  const needArr = [...need];

  for (const subject of plan) {
    if (subject !== needArr[0]) {
      continue;
    }

    needArr.shift();
  }

  if (needArr.length) {
    answer = 'NO';
  }

  return answer;
}

console.log(solution2(a, b)); // YES
console.log(solution2(a, c)); // NO
