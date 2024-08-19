function solution(target, arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle + 1;
    }

    if (arr[middle] > target) {
      right = middle - 1;
      continue;
    }

    left = middle + 1;
  }

  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
