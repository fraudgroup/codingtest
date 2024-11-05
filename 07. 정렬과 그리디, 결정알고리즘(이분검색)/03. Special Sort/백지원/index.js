function solution(arr) {
  const negative = arr.filter((num) => num < 0);
  const positive = arr.filter((num) => num > 0);
  return [...negative, ...positive];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
