function solution(n, arr) {
  let maxNumberSum = {
    sum: Number.MIN_SAFE_INTEGER,
    number: null,
  };

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let number = arr[i];

    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (sum < maxNumberSum.sum) {
      continue;
    }

    if (maxNumberSum.sum === sum) {
      maxNumberSum.number = Math.max(maxNumberSum.number, arr[i]);
      continue;
    }

    maxNumberSum = {
      sum,
      number: arr[i],
    };
  }

  return maxNumberSum.number;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
