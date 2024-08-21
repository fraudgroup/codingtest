/*
✅문제 제목: 재귀함수

✅문제 유형: 재귀함수

✅문제 풀이 날짜: 2024-08-18

💡문제 분석 요약
  - 자연수 N을 재귀함수를 이용하여 1부터 N까지를 출력하시오.

💡알고리즘 설계
  - 실행 컨텍스트 스택의 개념을 활용해서 DFS(L - 1)을 실행 후 console.log(L)을 출력한다.
  - L < 1 조건이면 return으로 함수를 종료한다.
  - DFS(L - 1)의 실행 컨텍스트가 스택에 push되면 console.log(L)의 렉시컬 스코프는 현재 실행중인 컨텍스트가 아니기 때문에 보류된다.
*/

function solution(n) {
  function DFS(L) {
    if (L < 1) {
      return;
    }

    DFS(L - 1);
    console.log(L);
  }

  DFS(n);
}

solution(3);
