function solution(arr1, arr2) {
  const setArr1 = new Set(arr1)
  const setArr2 = new Set(arr2)

  const common = [...setArr1].filter((n) => setArr2.has(n))
 
  return common.sort((a,b)=> a -b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
