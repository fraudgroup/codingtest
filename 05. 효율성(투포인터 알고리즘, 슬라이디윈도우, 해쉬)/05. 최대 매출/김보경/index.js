function solution(k, arr) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);

    if (stack.length > k) {
      stack.shift();
    }
    if (stack.length === k) {
      let sum = stack.reduce((acc, el) => acc + el, 0);
      answer = sum > answer ? sum : answer;
    }
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
