function solution(n, m) {
  let answer = [];
  const array = Array.from({ length: n }, (_, i) => i + 1);

  const DFS = (index, arr) => {
    if (arr.length > m) {
      return;
    }

    if (arr.length === m) {
      answer.push(arr);
    }

    for (let i = 0; i < n; i++) {
      DFS(index, [...arr, array[i]]);
    }
  };

  DFS(0, []);

  return answer;
}

console.log(solution(3, 2));
