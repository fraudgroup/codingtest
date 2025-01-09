function solution(m, arr) {
  let count = 0;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum > m) {
      sum -= arr[start];
      start++;
    }

    count += (end - start + 1);
  }

  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
