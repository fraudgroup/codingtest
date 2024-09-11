function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    }

    answer.push(i + 1);
    break;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] <= arr[i]) {
      continue;
    }

    answer.push(i + 1);
    break;
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(arr2));
