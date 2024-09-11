function solution(arr1, arr2) {
  let answer = [];

  arr1.forEach((el1) => {
    arr2.find((el2) => el1 === el2 && answer.push(el1));
  });

  return answer.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
