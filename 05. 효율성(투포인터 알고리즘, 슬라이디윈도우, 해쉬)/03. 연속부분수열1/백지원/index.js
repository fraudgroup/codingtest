function solution(m, arr) {
  let answer = 0;
  let p1 = 0;
  let sum = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];

    while (sum > m) {
      sum -= arr[p1];
      p1++;
    }

    if (sum === m) answer++;
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
