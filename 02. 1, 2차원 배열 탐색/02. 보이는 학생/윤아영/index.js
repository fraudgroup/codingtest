function solution(arr) {
  let answer = 0;
  let maxHeight = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
      answer += 1;
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
