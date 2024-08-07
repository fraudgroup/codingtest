function solution(board, moves) {
  let answer = 0;
  let basket = [];

  moves.forEach((move) => {
    let column = move - 1;

    for (let i = 0; i <= board.length; i++) {
      // doll = board[i][el] !== 0 ? board[i][el] : board[i++][el];
      if (board[i] !== undefined && board[i][column] !== 0) {
        let doll = board[i][column];
        board[i][column] = 0;

        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });

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
