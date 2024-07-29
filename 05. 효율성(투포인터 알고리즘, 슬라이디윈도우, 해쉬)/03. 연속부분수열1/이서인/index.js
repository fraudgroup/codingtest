function solution(m, arr) {
  let answer = 0;
  let pointer1 = 0;
  let pointer2 = 0;
  let sum = 0;

  while (pointer2 < arr.length) {
    sum += arr[pointer2++];

    while (sum > m && pointer1 < pointer2) {
      sum -= arr[pointer1++];
    }

    if (sum === m) {
      answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
