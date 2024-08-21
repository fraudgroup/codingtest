/*
✅문제 제목: 이진수 출력(재귀)

✅문제 유형: 재귀함수

✅문제 풀이 날짜: 2024-08-19

💡문제 분석 요약
  - 10진수 N이 입력되면 2진수로 변환하여 출력한다.
  - 재귀함수를 이용한다.

💡알고리즘 설계
  - N을 더 이상 나누어지지 않을 때 까지 2로 나눈다.
  - 2로 나눈 나머지를 뒤에서부터 순차적으로 정렬하면 2진수가 된다.
  - 재귀함수의 인수로는 (매개변수 / 2)를 전달하고 출력은 (매개변수 % 2)를 출력한다.
*/

function solution(n) {
  let answer = '';

  function DFS(L) {
    if (L === 1) {
      return 1;
    }

    return DFS(Math.trunc(L / 2)) + '' + (L % 2);
  }

  answer = DFS(n);

  return answer;
}

console.log(solution(11)); // 1011(2)
console.log(solution(54)); // 110110(2)
console.log(solution(32)); // 100000(2)
