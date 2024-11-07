function solution(arr) {
  let answer = arr;
  // i = 현재 삽입할 요소
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1; // 0 1 2 3 4

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
