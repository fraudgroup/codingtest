function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let l = arr.length - 1;

  for (let i = 0; i <= l; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j <= l; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }

    answer = Math.max(answer, rowSum, colSum);
  }

  let diag1Sum = 0;
  let diag2Sum = 0;

  for (let i = 0; i <= l; i++) {
    diag1Sum += arr[i][i];
    diag2Sum += arr[i][l - i];
  }

  answer = Math.max(answer, diag1Sum, diag2Sum);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
