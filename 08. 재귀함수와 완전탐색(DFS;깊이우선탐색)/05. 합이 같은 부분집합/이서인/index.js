function solution(arr) {
  let answer = 'NO';
  const totalSum = arr.reduce((a, b) => a + b, 0);
  
  function DFS(index, currentSum) {
    if (currentSum > totalSum / 2) return;
    if (currentSum === totalSum / 2) {
      answer = 'YES';
      return;
    }
    if (index >= arr.length) return;

    DFS(index + 1, currentSum + arr[index]);
    DFS(index + 1, currentSum)
  }

  DFS(0, 0)

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
