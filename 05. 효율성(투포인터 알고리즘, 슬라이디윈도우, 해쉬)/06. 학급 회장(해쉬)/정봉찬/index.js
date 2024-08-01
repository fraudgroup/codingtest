/*
✅문제 제목: 학급 회장(해쉬)

✅문제 유형: 효율성(해쉬)

✅문제 풀이 날짜: 2024-08-01

💡문제 분석 요약
  - 학생 회장 후보 A, B, C, D, E가 있다.
  - 투표 진행 후 선출된 학생 회장을 구한다.
  - 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정한다.

💡알고리즘 설계
  - Map 자료구조 변수 voteResult를 만든다.
  - 매개변수 s를 배열로 변환 후 반복문을 돈다.
  - 반복문을 돌면서 voteResult에서 get해서(없을 경우 0) + 1한 결과를 set한다.
  - 높은 투표 결과를 보관할 max 변수를 선언한다.
  - voteResult를 for ... of 문으로 투표 결과가 높은 후보를 선출한다.
*/

function solution(s) {
  let answer;

  const voteResult = new Map();
  let max = 0;

  [...s].forEach((vote) => {
    voteResult.set(vote, (voteResult.get(vote) || 0) + 1);
  });

  for (const [candidate, result] of voteResult) {
    if (result < max) continue;

    max = result;
    answer = candidate;
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
