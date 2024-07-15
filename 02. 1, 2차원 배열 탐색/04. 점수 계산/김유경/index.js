function solution(arr) {
  let totalScore = 0;

  let correctArray = arr
    .join("")
    .split("0")
    .map((subArr) => subArr.split("").map(Number))
    .filter((subArr) => subArr.every((num) => num === 1));

  correctArray.forEach((array) =>
    array.forEach((_, index) => (totalScore += index + 1))
  );

  return totalScore;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
