function solution(arr) {
  let answer = 0;
  let prevHeight = 0;

  arr.forEach((el) => {
    if (el > prevHeight) {
      answer++;
      prevHeight = el;
    }
  });

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
