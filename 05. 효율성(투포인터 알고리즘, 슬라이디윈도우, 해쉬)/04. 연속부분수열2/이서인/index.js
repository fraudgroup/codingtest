function solution(m, arr) {
  let answer = 0;
  let pointer1 = 0;
  let pointer2 = 0;
  let sum = 0;

  while (pointer2 < arr.length) {
    sum += arr[pointer2++];

    while (pointer1 < pointer2 && sum > m) {
      sum -= arr[pointer1++];
    }

    if (sum <= m) {
      answer += pointer2 - pointer1;
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
