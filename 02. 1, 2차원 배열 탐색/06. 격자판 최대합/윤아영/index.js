/**
 * n * n 2차원 배열이 주어진다.
 * 각 행희 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력한다.
 */

function solution(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let diagonalLeftToRight = 0;
  let diagonalRightToLeft = 0;

  // 가로 세로 합
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let columnSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }

    maxSum = Math.max(maxSum, rowSum, columnSum);
  }

  // 대각선 합
  for (let i = 0; i < arr.length; i++) {
    diagonalLeftToRight += arr[i][i];
    diagonalRightToLeft += arr[i][arr.length - (i + 1)];
  }

  return Math.max(maxSum, diagonalLeftToRight, diagonalRightToLeft);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
