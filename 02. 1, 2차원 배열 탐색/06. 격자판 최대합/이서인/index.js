function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const maxWidth = Math.max(
    ...arr.map((el) => el.reduce((acc, cur) => acc + cur), 0)
  );

  const heightSumArr = new Array(arr[0].length).fill(0);
  arr.forEach((arrElement) => {
    arrElement.forEach((el, index) => {
      heightSumArr[index] += el;
    });
  });
  const maxHeight = Math.max(...heightSumArr);

  const leftDiagonal = arr
    .map((el, index) => el[index])
    .reduce((acc, cur) => acc + cur, 0);

  const rightDiagonal = arr
    .map((el, index) => el[arr[0].length - index - 1])
    .reduce((acc, cur) => acc + cur, 0);

  return (answer = Math.max(maxWidth, maxHeight, leftDiagonal, rightDiagonal));
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
