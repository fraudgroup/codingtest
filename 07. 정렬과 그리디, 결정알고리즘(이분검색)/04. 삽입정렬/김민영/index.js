function solution(arr) {
  for (i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
