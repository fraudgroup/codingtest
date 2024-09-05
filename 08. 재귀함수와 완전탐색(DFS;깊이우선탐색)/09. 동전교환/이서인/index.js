function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(number, coins = []) {
    let price = coins.reduce((a, b) => a + b, 0);
    if (price > m) return;
    if (price === m) {
      answer = Math.min(answer, coins.length)
      return;
    }
    if (number > arr.length) return;

    DFS(number, [...coins, arr[number]])    
    DFS(number + 1, coins)    
  }
  DFS(0, [])
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
