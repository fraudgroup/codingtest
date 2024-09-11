function solution(arr) {
  let answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j][0] < answer[j + 1][0]) {
        continue;
      }
      if (answer[j][1] < answer[j + 1][1]) {
        continue;
      }
      [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
