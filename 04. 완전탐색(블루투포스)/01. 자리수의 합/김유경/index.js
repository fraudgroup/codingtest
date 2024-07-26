function solution(n, arr) {
  let maxSum = 0;
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    (arr[i] + "").split("").forEach((value) => {
      sum += +value;
    });

    if (sum > maxSum || (sum == maxSum && arr[i] > maxNum)) {
      maxSum = sum;
      maxNum = arr[i];
    }
  }

  return maxNum;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
