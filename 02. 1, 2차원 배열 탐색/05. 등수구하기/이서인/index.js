function solution(arr) {
  const copiedArr = new Set([...arr].sort((a, b) => b - a));
  const noDuplicatedArr = [...copiedArr];
  return arr.map((el) => noDuplicatedArr.indexOf(el) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
