function solution(arr) {
  // 각 행의 합
  let rowSum = [];
  arr.forEach((el) => {
    let sum = el.reduce((acc, element) => acc + element, 0);
    rowSum.push(sum);
  });

  // 각 열의 합
  let columnSum = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[j][i];
    }

    columnSum.push(sum);
  }

  // 두 대각선의 합
  let crossSum = [0, 0];
  arr.forEach((el, i) => {
    crossSum[0] += el[i];
    crossSum[1] += el.reverse()[i];
  });

  return Math.max(...rowSum, ...columnSum, ...crossSum);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
