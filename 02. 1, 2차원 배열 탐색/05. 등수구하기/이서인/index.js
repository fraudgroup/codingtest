function solution(arr) {
  let copiedArr = [...arr].sort((a, b) => b - a);
  return arr.map((el) => copiedArr.indexOf(el) + 1);
}

let arr = [87, 89, 100, 100, 76];
console.log(solution(arr));
