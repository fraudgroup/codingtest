function solution(arr) {
  let answer = 0;

  answer = arr.reduce((acc, el) => (el % 2 === 0 ? acc : acc + el), 0);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
