function solution(n, k, arr, m) {
  let parts = [];

  function DFS(index, part = [], count = 0) {
    if (count === k) {
      parts.push(part.slice());
      return;
    }
    if (index >= n) return;

    DFS(index + 1, part.concat(arr[index]), count + 1);
    DFS(index + 1, part, count);
  }

  DFS(0,[])

  return parts.filter(el => el.reduce((a, b) => a + b, 0) % m === 0).length
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));


