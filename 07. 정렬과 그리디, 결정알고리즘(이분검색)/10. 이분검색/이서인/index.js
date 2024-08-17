function solution(target, arr) {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  return answer;
}

// function solution(target, arr) {
//   arr.sort((a, b) => a - b);
//   return arr.indexOf(target) + 1;
// }

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
