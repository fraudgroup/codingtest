/*
✅문제 제목: 팩토리얼

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-09-01

💡문제 분석 요약
  - 자연수 N을 입력하면 N!값을 구하세요.

💡알고리즘 설계
  - n - 1로 재귀 호출하여 return한다.

*/

function solution(n) {
  let answer;

  function factorial(num) {
    if (num === 1) {
      return 1;
    }

    return num * factorial(num - 1);
  }

  answer = factorial(n);

  return answer;
}

console.log(solution(5)); // 120
