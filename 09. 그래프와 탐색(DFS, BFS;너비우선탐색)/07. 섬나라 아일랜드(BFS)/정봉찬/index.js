/*
✅문제 제목: 섬나라 아일랜드(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - N * N 격자판이 주어진다.
  - 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있다. 0은 바다이다.
  - 몇 개의 섬이 있는지 구하라.
  - N(3<=N<=20)

💡알고리즘 설계
  - 방문할 노드를 담을 queue를 빈 배열로 선언한다.
  - 이동을 제어할 dx, dy를 12시, 1.5시, 3시, 4.5시, 6시, 7.5시, 9시, 10.5시 방향을 기준으로 배열을 선언한다.
  - board의 길이 만큼 중첩 반복문을 돈다.
  - 방문할 수 없으면 continue한다.
  - 그 외에는 queue에 [y, x]의 좌표를 push하고 answer를 1더한다.
  - queue의 길이만큼 while문을 돈다.
  - queue에 넣을 때 항상 방문처리한다.
  - dx의 길이만큼 반복문 돌면서 방문 가능한 섬을 queue에 push한다.
*/

function solution(board) {
  let answer = 0;

  const N = board.length;
  const queue = [];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) {
        continue;
      }

      board[i][j] = 0;
      queue.push([i, j]);
      answer++;
      while (queue.length) {
        const [y, x] = queue.shift();

        for (let k = 0; k < dx.length; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || nx >= N || ny < 0 || ny >= N || !board[ny][nx]) {
            continue;
          }

          board[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr)); // 5
