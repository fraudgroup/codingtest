function solution(n, f) {
  let answer = null;
  let flag = false;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array(n + 1).fill(0);
  let p = Array(n);
  let b = Array(n);

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r]; //메모이제이션
    if (n === r || r === 0) return 1;
    return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);

  return answer.join(' ');
}

console.log(solution(4, 16));
