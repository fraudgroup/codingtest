function solution(board) {
  let answer = 0;
  const n = board.length;

  const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
    [1, 1]]
  
  function BFS(x, y) {
    let queue = [[x, y]];
    board[x][y] = 0;

    while (queue.length) {
      let [cx, cy] = queue.shift();
  
      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
          board[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        BFS(i, j)
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
