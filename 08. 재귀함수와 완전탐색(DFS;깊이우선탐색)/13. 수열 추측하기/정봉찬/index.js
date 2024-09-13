/*
✅문제 제목: 수열 추측하기

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-09-05

💡문제 분석 요약
  - 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
  - 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
  - N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하라.
  - 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력.
  - N(1<=N<=10), F(F<=1,000,000)

💡알고리즘 설계
  - 복습예정
*/

function solution(n, f) {
  let answer;

  const dy = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  const ch = Array.from({ length: n + 1 }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const b = Array.from({ length: n }, () => 0);
  let isFinished = 0;

  function combination(_n, _r) {
    if (dy[_n][_r] > 0) {
      return dy[_n][_r];
    }

    if (_r === 0 || _n === _r) {
      return 1;
    }

    return (dy[_n][_r] = combination(_n - 1, _r - 1) + combination(_n - 1, _r));
  }

  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i);
  }

  function DFS(idx, sum) {
    if (isFinished) {
      return;
    }

    if (idx === n && sum === f) {
      answer = p.slice();
      isFinished = 1;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (ch[i]) {
        continue;
      }

      ch[i] = 1;
      p[idx] = i;
      DFS(idx + 1, sum + p[idx] * b[idx]);
      ch[i] = 0;
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16)); // 3 1 2 4
