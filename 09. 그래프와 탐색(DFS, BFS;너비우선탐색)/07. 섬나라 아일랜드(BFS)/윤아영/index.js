function solution(board) {
  let answer = 0;
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  const queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
        board[i][j] = 0;
        answer++;

        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (board[nx]?.[ny] === 1) {
              queue.push([nx, ny]);
              board[nx][ny] = 0;
            }
          }
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

console.log(solution(arr));
