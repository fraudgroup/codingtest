/*
✅문제 제목: 송아지 찾기(BFS)

✅문제 유형: BFS

✅문제 풀이 날짜: 2024-09-08

💡문제 분석 요약
  - 현수는 송아지를 찾는다. 송아지는 움직이지 않고 제자리에 있다.
  - 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
  - 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하라.
  - 수직선상의 좌표는 1부터 10,000까지이다.
  - 현수의 위치 S와 송아지의 위치 E가 주어진다.
  - 답은 1 이상이다.

💡알고리즘 설계
  - 방문 노드를 넣을 큐를 빈 배열로 선언한다.
  - 방문 여부를 저장할 ch를 빈 배열로 선언한다.
  - queue에 시작값과 레벨을 배열로 묶어서 push한다.
  - while문을 돌면서 queue에서 값을 꺼낸다.
  - 꺼낸 노드가 방문한 노드면 continue한다.
  - 꺼낸 노드가 e에 도달하면 answer에 레벨을 할당하고 break한다.
  - 꺼낸 노드를 방문처리 한다.
  - 반복문을 돌면서 꺼낸 노드가 방문할 수 있는 노드를 queue에 push한다.
*/

function solution(s, e) {
  let answer = 0;

  const queue = [];
  const ch = [];

  queue.push([s, 0]);
  while (queue.length) {
    const [current, L] = queue.shift();

    if (ch[current]) {
      continue;
    }

    if (current === e) {
      answer = L;
      break;
    }

    ch[current] = 1;

    for (const next of [current + 1, current - 1, current + 5]) {
      queue.push([next, L + 1]);
    }
  }

  return answer;
}

console.log(solution(8, 3)); // 5
console.log(solution(5, 14)); // 3
