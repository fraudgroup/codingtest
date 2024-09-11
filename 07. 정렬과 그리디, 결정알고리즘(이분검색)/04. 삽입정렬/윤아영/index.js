function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) {
        break;
      }

      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
