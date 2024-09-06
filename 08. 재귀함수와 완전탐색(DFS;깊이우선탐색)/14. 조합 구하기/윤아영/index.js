function solution(n, m) {
  let answer = [];

  const DFS = (index, array) => {
    if (array.length === m) {
      answer.push(array);
      return;
    }

    for (let i = index; i <= n; i++) {
      DFS(i + 1, [...array, i]);
    }
  };

  DFS(1, []);

  return answer;
}

console.log(solution(4, 2));
