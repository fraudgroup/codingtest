function solution(arr) {
  let negative = [];
  let positive = [];

  for (num of arr) {
    num < 0 ? negative.push(num) : positive.push(num);
  }

  return [...negative, ...positive];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
