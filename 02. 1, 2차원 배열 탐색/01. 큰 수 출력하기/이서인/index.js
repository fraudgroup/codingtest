function solution(arr) {
  let answer = [];
  const N = arr.length;
  answer = arr.filter((el) => el >= N);
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
