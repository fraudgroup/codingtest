function solution(arr) {
  let answer = 0;
  let stack = 0;

  arr.forEach((el) => {
    if (el > 0) {
      stack++;
      answer += stack;
    } else {
      stack = 0;
    }
  });

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
