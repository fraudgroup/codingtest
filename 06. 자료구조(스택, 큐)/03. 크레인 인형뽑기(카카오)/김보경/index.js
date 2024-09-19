function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let array = [...board];

  for (let i of moves) {
    for (let arr of array) {
      let val = arr[i - 1];
      if (val) {
        if (stack[stack.length - 1] === val) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(arr[i - 1]);
        }
        arr[i - 1] = 0;
        break;
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
