function solution(arr) {
  let answer = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  arr.forEach((row, i) => {
    row.forEach((el, j) => {
      const isPeak = directions.every(([directionX, directionY]) => {
        const newI = i + directionX;
        const newJ = j + directionY;

        if (newI < 0 || newI >= arr.length || newJ < 0 || newJ >= arr.length) {
          return true;
        }
        return el > arr[newI][newJ];
      });

      if (isPeak) answer++;
    });
  });
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
