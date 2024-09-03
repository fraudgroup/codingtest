function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let row_sum = 0;
    let col_sum = 0;
    for (let j = 0; j < n; j++) {
      row_sum += arr[i][j]; // i번째 행 합
      col_sum += arr[j][i]; // i번째 열 합
    }

    answer = Math.max(answer, row_sum, col_sum);
  }

  let diag1_sum = 0; // 좌상단=>우하단 대각선
  let diag2_sum = 0; // 우상단=>좌하단 대각선

  for (let i = 0; i < n; i++) {
    diag1_sum += arr[i][i];
    diag2_sum += arr[i][n - i - 1];
  }

  answer = Math.max(answer, diag1_sum, diag2_sum);
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
