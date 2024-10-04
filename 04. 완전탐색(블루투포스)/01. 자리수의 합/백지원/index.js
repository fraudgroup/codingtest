function digitSum(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);
}

function solution(n, arr) {
  let answer = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    let sum = digitSum(arr[i]);
    if (sum > maxSum || (sum === maxSum && arr[i] > answer)) {
      maxSum = sum;
      answer = arr[i];
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
