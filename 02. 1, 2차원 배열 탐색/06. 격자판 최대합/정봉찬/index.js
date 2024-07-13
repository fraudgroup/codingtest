/*
✅문제 제목: 격자판 최대합

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-13

💡문제 분석 요약
  - N * N 격자판이 주어질 때 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력한다.

💡알고리즘 설계
  - 좌측 상단 -> 우측 하단 대각선: [0, 0] + [1, 1] + [2 + 2] + ...
  - 우측 상단 -> 좌측 하단 대각선: [0, N] + [1, N - 1] + [2, N - 2] + ...
  - 각 열의 합: [0, 0] + [1, 0] + [2, 0] + [3, 0] + ...
  - 각 행의 합: [0, 0] + [0, 1] + [0, 2] + [0, 3] + ...
*/

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const N = arr.length;

  let leftTopDiagonalSum = 0;
  let rightTopDiagonalSum = 0;
  for (let i = 0; i < N; i++) {
    leftTopDiagonalSum += arr[i][i];
    rightTopDiagonalSum += arr[i][N - 1 - i];
  }

  let columnSumMax = 0;
  let rowSumMax = 0;
  for (let i = 0; i < N; i++) {
    let columnSum = 0;
    let rowSum = 0;

    for (let j = 0; j < N; j++) {
      columnSum += arr[j][i];
      rowSum += arr[i][j];
    }

    if (columnSumMax < columnSum) {
      columnSumMax = columnSum;
    }

    if (rowSumMax < rowSum) {
      rowSumMax = rowSum;
    }
  }

  answer = Math.max(
    leftTopDiagonalSum,
    rightTopDiagonalSum,
    columnSumMax,
    rowSumMax
  );

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
