/*
✅문제 제목: 크레인 인형뽑기(카카오)

✅문제 유형: 자료구조(스택)

✅문제 풀이 날짜: 2024-08-07

💡문제 분석 요약
  - N x N 크기의 정사각 격자에서 제일 위에 존재하는 인형부터 바구니에 담을 수 있다.
  - 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 바구니에서 사라진다.

💡알고리즘 설계
  - 스택 변수 stack을 선언하고 빈 배열로 초기화한다.
  - 스택 변수 basket을 선언하고 빈 배열로 초기화한다.
  - board를 반복문 돌면서 내부 배열을 거꾸로 반복문 돌면서 stack에 2차원 배열 형태로 담는다. 이때 0은 담지 않는다. 예) board[5][0], board[4][0], board[3][0] ...
  - moves를 반복문 돌면서 stack에서 꺼내서 basket에 담는다. 이때 stack에서 꺼낸 값이 basket의 마지막 값과 같다면 basket을 pop하고 answer를 2 더한다.
*/

function solution(board, moves) {
  let answer = 0;

  const stack = [];
  const basket = [];

  for (let i = 0; i < board.length; i++) {
    const column = [];

    for (let j = board.length - 1; j >= 0; j--) {
      const item = board[j][i];

      if (!item) continue;

      column.push(board[j][i]);
    }

    stack.push(column);
  }

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const item = stack[move - 1].pop();

    if (!item) continue;

    if (item === basket[basket.length - 1]) {
      basket.pop();
      answer += 2;
      continue;
    }

    basket.push(item);
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
