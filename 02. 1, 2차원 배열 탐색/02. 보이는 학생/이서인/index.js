function solution(arr) {
  return arr.sort((a, b) => a - b);
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
