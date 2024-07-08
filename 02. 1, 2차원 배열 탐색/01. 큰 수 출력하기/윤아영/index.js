function solution(arr) {
  return arr.filter((num, i) => num > (arr[i - 1] || 0));
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
