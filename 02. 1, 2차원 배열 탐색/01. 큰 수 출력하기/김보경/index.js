function solution(arr) {
  let answer = [];
  let prevEl = 0;

  arr.forEach((el) => {
    el > prevEl && answer.push(el);
    prevEl = el;
  });

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
