function solution(board, moves) {
  const basket = [];
  let answer = 0;

  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      const currentItem = board[i][move - 1];

      if (currentItem === 0) {
        continue;
      }

      if (basket[basket.length - 1] === currentItem) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(currentItem);
      }

      board[i][move - 1] = 0;
      break;
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
