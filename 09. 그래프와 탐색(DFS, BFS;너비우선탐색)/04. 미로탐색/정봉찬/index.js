/*
✅문제 제목: 미로탐색

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력한다.
  - 출발점은 (1, 1) 좌표, 도착점은 (7, 7) 좌표.
  - 격자판의 1은 벽, 0은 통로.
  - 상하좌우로만 움직인다.

💡알고리즘 설계
  - 격자판의 각 좌표를 노드로 계산해보자.
  - 7*7 이므로 총 49개의 노드로 분리. 1번 노드는 출발점, 49번 노드는 도착점
  - 인접행렬 방식으로 풀어보자.
  - 자신이 방문할 수 있는 노드는 상: -7, 하: +7, 좌: -1, 우: +1이다. 여기서 해당 인덱스의 값이 1(벽)이라면 방문 불가능.
  - 방문한 노드를 저장할 ch 총 노드의 수 + 1만큼의 길이의 배열을 선언하고 0으로 초기화한다.
  - 중첩 반복문을 돌면서 각 노드가 방문할 수 있는 노드에 1을 할당한다.
  - 재귀함수의 매개변수로 현재 노드를 받으며 총 노드의 수만큼 반복문을 돌면서 재귀 탐색한다.
*/

function solution(board) {
  let answer = 0;

  const len = board.length;
  const nodeCnt = len * len;

  const graph = Array.from({ length: nodeCnt + 1 }, () =>
    Array(nodeCnt + 1).fill(0)
  );
  const ch = Array.from({ length: nodeCnt + 1 }, () => 0);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const node = len * i + j + 1;
      const top = board[i - 1]?.[j] ?? 1;
      const bottom = board[i + 1]?.[j] ?? 1;
      const left = board[i][j - 1] ?? 1;
      const right = board[i][j + 1] ?? 1;

      if (!top) {
        graph[node][node - len] = 1;
      }

      if (!bottom) {
        graph[node][node + len] = 1;
      }

      if (!left) {
        graph[node][node - 1] = 1;
      }

      if (!right) {
        graph[node][node + 1] = 1;
      }
    }
  }

  function DFS(v) {
    if (v === nodeCnt) {
      answer++;
      return;
    }

    for (let i = 1; i <= nodeCnt; i++) {
      if (!graph[v][i] || ch[i]) {
        continue;
      }

      ch[i] = 1;
      DFS(i);
      ch[i] = 0;
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr)); // 8

/*
✅문제 제목: 미로탐색

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-07

💡문제 분석 요약
  - 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력한다.
  - 출발점은 (1, 1) 좌표, 도착점은 (7, 7) 좌표.
  - 격자판의 1은 벽, 0은 통로.
  - 상하좌우로만 움직인다.

💡알고리즘 설계
  - ⭐ dx, dy 풀이
  - 상, 하, 좌, 우로 이동할 수 있는 dx, dy 배열을 선언한다.
  - x 좌표와 y 좌표를 받는 재귀함수를 선언한다.
  - board의 0, 0(출발점)은 방문한 표시로 1을 할당한다.
  - 첫 재귀함수의 호출에서 0, 0(출발점)을 인수로 전달한다.
  - 매개변수로 받은 x, y 좌표가 6, 6에 도달하면 answer를 1 더하고 함수를 종료한다.
  - dx의 길이만큼 반복문 돌면서 다음 좌표를 계산해 방문처리하고 재귀함수를 호출한다.
  - 재귀함수를 호출하고 방문처리를 다시 제거한다.
*/

function solution2(board) {
  let answer = 0;

  const len = board.length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function DFS(x, y) {
    if (x === len - 1 && y === len - 1) {
      answer++;
      return;
    }

    for (let i = 0; i < dx.length; i++) {
      const _x = x + dx[i];
      const _y = y + dy[i];

      if (_x < 0 || _x >= len || _y < 0 || _y >= len || board[_x][_y] !== 0) {
        continue;
      }

      board[_x][_y] = 1;
      DFS(_x, _y);
      board[_x][_y] = 0;
    }
  }

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

console.log(solution2(arr)); // 8
