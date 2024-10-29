function solution(arr1, arr2) {
  let answer = [];
  const newArr = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(newArr);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
