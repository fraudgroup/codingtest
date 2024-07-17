function solution(arr) {
  const L = arr.length;
  let sumList = [];
  let rowSum, columnSum;
  let toLeftCrossSum = 0;
  let toRightCrossSum = 0;

  // 행과 열의 합 구하기
  for (let i = 0; i < L; i++) {
    rowSum = 0;
    columnSum = 0;
    for (let j = 0; j < L; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];

      // 대각선 합 구하기
      if (i === j) {
        toRightCrossSum += arr[i][j];
      }

      if (i + j === 5) {
        toLeftCrossSum += arr[i][j];
      }
    }
    sumList.push(rowSum, columnSum);
  }
  sumList.push(toLeftCrossSum, toRightCrossSum);

  return Math.max(...sumList);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
