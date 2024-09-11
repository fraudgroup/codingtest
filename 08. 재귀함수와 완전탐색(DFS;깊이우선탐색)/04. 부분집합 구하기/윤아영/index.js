function solution(n) {
  let answer = [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  const DFS = (index, path) => {
    answer.push(path);

    for (let i = index; i < n; i++) {
      DFS(i + 1, [...path, numbers[i]]);
    }
  };

  DFS(0, []);

  return answer;
}

console.log(solution(3));
