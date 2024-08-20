function solution(n) {
  function DFS(L) {
    if (L === 1) {
      return L;
    }

    return `${DFS(L - 1)} ${L}`;
  }

  console.log(DFS(n));
}

solution(3);
