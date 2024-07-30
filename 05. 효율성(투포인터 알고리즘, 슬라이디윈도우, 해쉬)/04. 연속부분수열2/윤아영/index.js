function solution(m, arr) {
  let answer = 0;
  let point1 = 0;
  let length = 1;

  while (true) {
    if (point1 >= arr.length || length > arr.length) break;

    let sum = 0;

    for (let i = point1; i < point1 + length; i++) {
      sum += arr[i];

      if (sum > m) {
        break;
      }
    }

    point1++;

    if (sum <= m) {
      answer++;
    }

    if (point1 + length > arr.length) {
      point1 = 0;
      length++;
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
