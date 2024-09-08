function solution(arr) {
  let sortArr = [...arr].sort((a, b) => b - a);

  return arr.map((num) => sortArr.indexOf(num) + 1)
}

let arr = [87, 89, 92, 100, 76];
let arr1 = [83, 92, 78, 92, 92]
console.log(solution(arr));
console.log(solution(arr1));
