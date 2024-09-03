/*
✅문제 제목: 최대점수 구하기

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-21

💡문제 분석 요약
  - 제한시간 안에 최대점수를 얻을 수 있도록 해야 한다.

💡알고리즘 설계
  - 재귀함수의 매개변수로 idx(인덱스), time(시간), sum(점수합)을 받는다.
  - 문제를 풀 때와 풀지 않았을 때를 나눈다.
  - time > m 일 때 함수를 종료한다.
  - 모든 탐색이 종료되면(idx === ps.length) answer와 sum 중에서 큰 값을 answer에 할당한다.
*/

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(idx, time, sum) {
    if (time > m) {
      return;
    }

    if (idx === ps.length) {
      answer = Math.max(answer, sum);
      return;
    }

    DFS(idx + 1, time + pt[idx], sum + ps[idx]);
    DFS(idx + 1, time, sum);
  }

  DFS(0, 0, 0);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt)); // 41
