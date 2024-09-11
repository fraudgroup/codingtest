function solution(board) {
  let answer = 0;
  const n = board.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  function DFS(x, y) {
    if (x === n - 1 && y === n - 1) {
      answer++;
      return;
    }

    visited[x][y] = true;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] === 0) {
        DFS(nx, ny);
      }
    }

    visited[x][y] = false;
  }
    if (board[0][0] === 0) {
      DFS(0, 0)
    }
  
  return answer;
}

// 틀린 풀이 => visited 배열을 1차원으로 설정했다.
// function solution(board) {
//   let answer = 0;
//   const visited = new Array(board.length).fill(false);

//   function DFS(v) {
//     if (v === board.length - 1) {
//       answer++;
//       return;
//     }
//     for (let i = 1; i <= board.length - 1; i++) {
//       if (board[v][i] === 0 && !visited[i]) {
//         visited[i] = true
//         DFS(i)
//         visited[i] = false
//       }
//     }  
//   }
//   visited[1] = true;
//   DFS(1)

//   return answer;
// }

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
