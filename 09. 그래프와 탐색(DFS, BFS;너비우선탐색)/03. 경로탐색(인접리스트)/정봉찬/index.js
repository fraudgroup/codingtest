/*
✅문제 제목: 경로탐색(인접리스트)

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하라.
  - 정점의 수 N(1<=N<=20), 간선의 수 M

💡알고리즘 설계
  - 
*/

function solution(n, arr) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => Array());
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [s, e] of arr) {
    graph[s].push(e);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      return;
    }

    const destinations = graph[v];

    for (let i = 0; i < destinations.length; i++) {
      const destination = destinations[i];

      if (ch[destination]) {
        continue;
      }

      ch[destination] = 1;
      DFS(destination);
      ch[destination] = 0;
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr)); // 6
