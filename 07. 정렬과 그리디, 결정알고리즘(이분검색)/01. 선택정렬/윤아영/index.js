function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    const minValue = Math.min(...arr.slice(i + 1));

    if (arr[i] <= minValue) {
      continue;
    }

    const index = arr.indexOf(minValue);

    arr[index] = arr[i];
    arr[i] = minValue;
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
