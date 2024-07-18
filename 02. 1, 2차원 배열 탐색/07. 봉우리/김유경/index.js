function solution(arr) {
  let L = arr.length;
  let maxCount = 0;

  for (let i = 0; i < L; i++) {
    for (let j = 0; j < L; j++) {
      let current = arr[i][j];
      let top = i > 0 ? arr[i - 1][j] : 0;
      let bottom = i < L - 1 ? arr[i + 1][j] : 0;
      let left = j > 0 ? arr[i][j - 1] : 0;
      let right = j < L - 1 ? arr[i][j + 1] : 0;

      if (
        current > top &&
        current > bottom &&
        current > left &&
        current > right
      ) {
        maxCount++;
      }
    }
  }

  return maxCount;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
