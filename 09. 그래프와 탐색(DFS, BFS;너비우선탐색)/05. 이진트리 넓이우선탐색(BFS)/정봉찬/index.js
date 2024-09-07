/*
✅문제 제목: 이진트리 넓이우선탐색(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - 이진트리를 넓이우선탐색해 보세요.
  - 1 2 3 4 5 6 7

💡알고리즘 설계
  - 현재 노드 기준 왼쪽 자식 노드는 (현재 노드 x 2), 오른쪽 자식 노드는 (현재 노드 x 2 + 1)
  - 노드를 담을 큐를 빈 배열로 선언한다.
  - 재귀를 돌면서 큐에서 노드를 꺼내고 왼쪽 자식 노드, 오른쪽 자식 노드를 넣는다.
  - 꺼낸 노드가 7이면 함수를 종료한다.
*/

function solution() {
  let answer = '';
  const queue = [];

  function BFS() {
    const node = queue.shift();
    answer += node + ' ';

    if (node === 7) {
      return;
    }

    const left = node * 2;
    const right = node * 2 + 1;

    queue.push(left);
    queue.push(right);

    BFS();
  }

  queue.push(1);
  BFS(0);

  return answer;
}

console.log(solution());
