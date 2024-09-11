function solution(arr1, arr2) {
  let answer = [];

  arr1.forEach((el1) => {
    arr2.find((el2) => el1 === el2 && answer.push(el1));
  });

  return answer.sort((a, b) => a - b);
}

// 다른 풀이 추가
const solution2 = (arr1, arr2) => {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
};

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
console.log(solution2(a, b));
