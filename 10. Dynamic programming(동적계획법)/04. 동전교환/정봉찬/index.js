/*
✅문제 제목: 동전교환

✅문제 유형: DP(냅색 알고리즘)

✅문제 풀이 날짜: 2024-09-09

💡문제 분석 요약
  - 여러 단위의 동전들이 주어져 있을 때 거스름돈을 가장 적은 수로 주는 방법을 출력한다.
  - 동전은 무한정 쓸 수 있다.
  - 동전의 종류 개수 N(1<=N<=12), 거슬러 줄 금액 M(1<=M<=500)
  - 각 동전의 종류는 100원을 넘지 않는다.

💡알고리즘 설계
  - 
*/

function solution(m, coin) {
  let answer = 0;

  const dy = Array.from({ length: m + 1 }, () => m);

  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }

  answer = dy[m];

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr)); // 3
