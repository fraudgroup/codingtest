function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (i = 0; i < moves.length; i++) {
    for (j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;

        break;
      }
    }

    if (basket.length > 1 && basket[basket.length - 2] === basket[basket.length - 1]) {
      basket.pop();
      basket.pop();
      answer += 2;
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
