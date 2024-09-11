function solution(arr) {
  let answer = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[0].length; j++) {
      let top = i > 0 ? arr[i - 1][j] : 0;
      let bottom = i < arr.length - 1 ? arr[i + 1][j] : 0;
      let left = j > 0 ? arr[i][j - 1] : 0;
      let right = j < arr[0].length - 1 ? arr[i][j + 1] : 0;

      if (arr[i][j] > Math.max(top, bottom, left, right)) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
