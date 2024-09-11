function solution(arr1, arr2) {
  let answer = [...arr1, ...arr2].sort((a, b) => a - b);

  return answer;
}

// 다른 풀이 추가
function solution2(arr1, arr2) {
  let answer = [];

  let n = arr1.length;
  let m = arr2.length;
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < n && pointer2 < m) {
    if (arr1[pointer1] <= arr2[pointer2]) answer.push(arr1[pointer1++]);
    else answer.push(arr2[pointer2++]);
  }
  while (pointer1 < n) answer.push(arr1[pointer1++]);
  while (pointer2 < m) answer.push(arr2[pointer2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution2(a, b));
