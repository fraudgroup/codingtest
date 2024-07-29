function solution(arr1, arr2) {
  const set = new Set(arr1);

  return arr2.filter((v) => set.has(v)).sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
