function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(index, currentSum) {
    if (currentSum > c) return;
    answer = Math.max(answer, currentSum)
    if (index === arr.length) return;
    
    DFS(index + 1, currentSum + arr[index]);
    DFS(index + 1, currentSum);
  }
  DFS(0, 0)
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
