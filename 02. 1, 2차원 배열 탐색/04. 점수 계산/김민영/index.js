function solution(arr) {
  let answer = 0;
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer += count + 1;
      count++;
    } else {
      count = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
