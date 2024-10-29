function solution(n, k, card) {
  let s = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let l = j + 1; l < n; l++) {
        s.add(arr[i] + arr[j] + arr[l]);
      }
    }
  }
  // s 배열로 변환
  return [...s].sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
