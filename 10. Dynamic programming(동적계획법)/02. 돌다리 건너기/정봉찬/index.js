/*
✅문제 제목: 돌다리 건너기

✅문제 유형: DP

✅문제 풀이 날짜: 2024-09-09

💡문제 분석 요약
  - N개의 돌다리가 있다.
  - 돌다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 건널 수 있다.
  - 돌다리를 건너는 방법은 몇 가지인가?
  - 돌의 개수 자연수 N(3<=N<=45)

💡알고리즘 설계
  - ⭐ DFS 풀이.
  - 재귀함수는 레벨(현재 돌 위치)를 매개변수로 가진다.
  - 첫 재귀함수 호출에 0을 인수로 전달한다.
  - 레벨이 n보다 크거나 같으면 answer을 1더하고 return한다.
  - 재귀함수를 레벨 + 1, 레벨 + 2로 호출한다.
*/

function solution(n) {
  let answer = 0;

  function DFS(L) {
    if (L >= n) {
      answer++;
      return;
    }

    DFS(L + 1);
    DFS(L + 2);
  }

  DFS(0);

  return answer;
}

console.log(solution(7)); // 34
