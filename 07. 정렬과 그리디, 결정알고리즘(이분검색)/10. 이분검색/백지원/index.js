function solution(target, arr) {
  const sortArr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = sortArr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target === arr[mid]) return mid + 1;
    else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
