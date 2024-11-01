function solution(board, moves) {
  let stack = [];
  let answer = 0;

  for (let move of moves) {
    let col = move - 1;
    // 쌓여있는 상태 확인해야하므로 행 탐색
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        let doll = board[row][col];
        board[row][col] = 0;

        if (stack[stack.length - 1] === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }
        break; // board[row][col] !== 0가 성립하면 반복문 종료 => 인형을 뽑았으므로
      }
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
