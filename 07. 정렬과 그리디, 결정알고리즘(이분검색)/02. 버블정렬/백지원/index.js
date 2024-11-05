function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i; // 최소값을 가진 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
