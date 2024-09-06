function solution(n, k, arr, m) {
  let answer = 0;

  const DFS = (index, array) => {
    if (array.length === k) {
      answer = array.reduce((acc, cur) => acc + cur, 0) % m === 0 ? answer + 1 : answer;
      return;
    }

    for (let i = index; i < arr.length; i++) {
      DFS(i + 1, [...array, arr[i]]);
    }
  };

  DFS(0, []);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
