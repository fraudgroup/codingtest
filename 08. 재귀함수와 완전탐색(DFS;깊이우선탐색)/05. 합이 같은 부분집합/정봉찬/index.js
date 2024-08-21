/*
✅문제 제목: 합이 같은 부분집합

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-08-21

💡문제 분석 요약
  - N개의 원소로 구성된 자연수 집합이 있다.
  - 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 합이 서로 같으면 "YES" 아니면 "NO"를 출력한다.
  - {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10}으로 두 부분집합의 합이 16으로 같다.
  - 1 <= N <= 10
  - 각 원소는 중복되지 않는다. 원소는 1,000,000 이하다.

💡알고리즘 설계
  - ⭐ 가장 중요한 것. 두 부분집합의 요소를 서로 중복될 수 없다. 즉, 탐색을 한 경우와 그렇지 않은 경우를 나누면 쉽게 접근할 수 있다.
  - 노드의 탐색 여부를 저장할 배열 ch를 선언하고 배열의 길이만큼 요소를 0으로 채운다.
  - 재귀 함수의 인수로 0(첫번째 인덱스)를 넣어준다.
  - 탐색을 했을 경우 ch에서 해당 인덱스를 1로 바꿔주고 다음 노드의 탐색(해당 노드 + 1)을 진행한다.
  - 탐색을 하지 않았을 경우 ch에서 해당 인덱스를 0으로 바꿔주고 다음 노드의 탐색(해당 노드 + 1)을 진행한다.
  - 모든 노드의 탐색이 종료(매개변수가 배열의 길이) 되었을 경우 두 부분집합의 합을 저장할 변수 one, two를 선언한다.
  - 반복문을 돌면서 탐색한 노드의 경우 one에 노드를 더하고, 탐색하지 않은 노드는 two에 노드를 더한다.
  - 반복문이 종료되고 one과 two가 같다면 서로소가 존재하므로 answer에 "YES"를 할당한다.
*/

function solution(arr) {
  let answer = 'NO';
  const ch = Array.from({ length: arr.length }, () => 0);

  function DFS(idx) {
    if (idx === arr.length) {
      let one = 0;
      let two = 0;
      for (let i = 0; i < arr.length; i++) {
        if (ch[i]) {
          one += arr[i];
          continue;
        }

        two += arr[i];
      }

      if (one === two) {
        answer = 'YES';
      }

      return;
    }

    ch[idx] = 1;
    DFS(idx + 1);
    ch[idx] = 0;
    DFS(idx + 1);
  }

  DFS(0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // YES
let arr2 = [1, 3, 5, 8];
console.log(solution(arr2)); // NO
