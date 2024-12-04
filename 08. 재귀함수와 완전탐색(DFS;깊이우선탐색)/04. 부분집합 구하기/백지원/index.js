function solution(n) {
  let answer = [];
  let subset = []; // 현재까지 선택된 부분 집합

  // L: 현재 원소 번호
  function DFS(L) {
    if (L === n + 1) {
      // 모든 원소를 탐색한 경우
      answer.push([...subset]);
    } else {
      subset.push(L);
      DFS(L + 1);

      subset.pop();
      DFS(L + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
