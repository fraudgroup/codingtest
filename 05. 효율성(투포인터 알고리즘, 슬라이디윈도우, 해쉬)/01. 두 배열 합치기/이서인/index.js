function solution(arr1, arr2) {
  const answer = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (
      pointer2 === arr2.length ||
      (pointer1 < arr1.length && arr1[pointer1] <= arr2[pointer2])
    ) {
      answer.push(arr1[pointer1++]);
    } else {
      answer.push(arr2[pointer2++]);
    }
  }
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
