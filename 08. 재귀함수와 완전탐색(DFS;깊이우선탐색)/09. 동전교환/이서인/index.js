function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(currentSum, index) {
    if (currentSum > m) return;
    if (currentSum === m) {
      answer = Math.min(answer, index);
      return
    }

    for (let i = 0; i < arr.length; i++) {
      DFS(currentSum + arr[i], index + 1);
    }
  }
  DFS(0, 0)
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
