/*
✅문제 제목: 섬나라 아일랜드(DFS)

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - N*N 격자판이 있다.
  - 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있다.
  - 0은 바다이다.
  - N(3<=N<=20)

💡알고리즘 설계
  - 12시, 1.5시, 3시, 4.5시, 6시, 7.5시, 9시, 10.5시를 기준으로 dx, dy 배열을 생성한다.
  - 좌표 평면 기준이 아닌 배열의 인덱스를 기준으로 dx, dy를 계산한다.
  - board를 중첩 반복문을 통해서 0, 0부터 N, N까지 재귀함수를 호출한다.
  - 이때 바다나 이미 방문한 섬은 continue로 패스한다.
  - 그 외에는 answer를 1 더하고 재귀함수를 호출한다.
  - 방문한 지역을 0으로 변경하여 방문 여부를 표시한다.
  - 재귀함수에서 인접한 섬을 재귀탐색하면서 탐색 여부를 체크한다.
*/

function solution(board) {
  let answer = 0;

  const N = board.length;
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(y, x) {
    board[y][x] = 0;

    for (let i = 0; i < dx.length; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || !board[ny][nx]) {
        continue;
      }

      DFS(ny, nx);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) {
        continue;
      }
      answer++;
      DFS(i, j);
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
