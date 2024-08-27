function solution(n) {
  let answer = "";

  const DFS = (n) => {
    if (n > 7) {
      return;
    }

    answer += n;
    
    DFS(n * 2);
    DFS(n * 2 + 1);
  };

  DFS(n);

  return answer;
}

console.log(solution(1));
