function solution(arr) {
  return arr.sort((a, b) => b - a)[0];
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
