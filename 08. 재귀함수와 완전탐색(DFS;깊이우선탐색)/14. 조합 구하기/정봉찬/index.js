/*
✅문제 제목: 조합 구하기

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-06

💡문제 분석 요약
  - 1부터 N까지 번호가 적힌 구슬에서 M개를 뽑는 방법의 수를 출력.
  - 출력은 사전순으로 오름차순.
  - 자연수 N(3<=N<=10), M(2<=M<=N)

💡알고리즘 설계
  - 재귀함수로 인덱스와 배열을 받는다.
  - 첫 재귀함수 호출로 1과 빈배열을 넘겨준다.
  - 배열의 길이가 m과 같으면 배열을 answer에 push한다.
  - 반복문을 도는데 첫 시작을 매개변수로 넘겨받은 인덱스를 할당하고 n만큼 반복한다.
  - 반복문을 돌면서 재귀함수로 현재 인덱스 + 1을 넘겨주며 넘겨받은 배열과 현재 요소를 합쳐서 넘겨준다.
*/

function solution(n, m) {
  let answer = [];

  function DFS(idx, arr) {
    if (arr.length === m) {
      answer.push(arr);
      console.log(arr);
      return;
    }

    for (let i = idx; i <= n; i++) {
      DFS(i + 1, [...arr, i]);
    }
  }

  DFS(1, []);

  answer = answer.length;

  return answer;
}

console.log(solution(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]], 6
