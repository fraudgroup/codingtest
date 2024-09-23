function solution(n, arr) {
  let maxSum = 0;
  let maxNum = 0;

  for (num of arr) {
    let digitSum = String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);

    if (digitSum > maxSum || (digitSum === maxSum && num > maxNum)) {
      maxSum = digitSum;
      maxNum = num;
    }
  }

  return maxNum;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
