function solution(arr) {
  let answer = 0;
  let n = arr.length;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let outlineArr = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      outlineArr[i + 1][j + 1] = arr[i][j];
    }
  }

  // 봉우리 탐색
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let isPeak = true; // 초기값을 봉우리로

      // 상하좌우 탐색
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (outlineArr[nx][ny] >= outlineArr[i][j]) {
          isPeak = false;
          break;
        }
      }
      if (isPeak) answer++;
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
