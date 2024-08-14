function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let pointer = i;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[pointer] >= arr[j]) {
        break;
      }

      if (arr[pointer] < arr[j]) {
        [arr[j], arr[pointer]] = [arr[pointer], arr[j]];
        pointer -= 1;
      }
    }
  }

  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
