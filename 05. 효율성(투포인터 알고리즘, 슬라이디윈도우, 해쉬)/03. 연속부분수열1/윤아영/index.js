function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let point1 = 0;
  let point2 = 0;

  while (point1 < arr.length) {
    sum += arr[point2];

    if (sum < m && point2 < arr.length - 1) {
      point2++;
      continue;
    }

    if (sum === m) {
      answer++;
    }

    sum = 0;
    point2 = ++point1;
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
