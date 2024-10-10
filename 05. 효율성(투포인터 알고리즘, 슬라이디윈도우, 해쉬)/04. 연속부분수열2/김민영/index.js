function solution(m, arr) {
  let answer = 0;

  // [...arr].map(num => num <= m && answer++);

  let lP = 0;
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > m) {
      sum -= arr[lP];
      lP++;
    }

    // answer++;
    answer += (i - lP + 1);
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
