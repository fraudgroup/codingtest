function solution(board) {
  let answer = 0;
  const moves = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  const copyBoard = Array.from({ length: board.length }, (_, i) => [...board[i]]);

  const DFS = (point) => {
    if (point[0] === board.length - 1 && point[1] === board.length - 1) {
      answer++;
      return;
    }

    for (const move of moves) {
      const newPointX = point[0] + move[0];
      const newPointY = point[1] + move[1];

      if (copyBoard[newPointX]?.[newPointY] !== 0) {
        continue;
      }

      copyBoard[point[0]][point[1]] = 1;
      DFS([newPointX, newPointY]);
      copyBoard[point[0]][point[1]] = 0;
    }
  };

  DFS([0, 0]);

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

console.log(solution(arr));
