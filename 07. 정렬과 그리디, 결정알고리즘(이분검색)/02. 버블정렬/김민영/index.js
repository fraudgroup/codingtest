function solution(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
