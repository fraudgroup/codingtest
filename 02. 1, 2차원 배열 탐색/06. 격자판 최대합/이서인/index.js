function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const maxWidth = Math.max(
    ...arr.map((el) => el.reduce((acc, cur) => acc + cur), 0)
  );

  const result = new Array(arr[0].length).fill(0);
  arr.forEach((el) => {
    el.forEach((el, index) => {
      result[index] += el;
    });
  });
  const maxHeight = Math.max(...result);

  const leftDiagonal = arr
    .map((el, index) => el[index])
    .reduce((acc, cur) => acc + cur, 0);

  const rightDiagonal = arr
    .map((el, index) => el[arr[0].length - index - 1])
    .reduce((acc, cur) => acc + cur, 0);

  answer = Math.max(maxWidth, maxHeight, leftDiagonal, rightDiagonal);

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
