// 2-4. 점수 계산
function solution(arr) {
  let count = 0;
  let sum = 0;

  arr.forEach((el, index) => {
    if (el === 1) {
      if (index === 0 || arr[index - 1] === 0) count = 1;
      if (arr[index - 1] === 1) count++;
      sum += count;
    }
  });

  return sum;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
