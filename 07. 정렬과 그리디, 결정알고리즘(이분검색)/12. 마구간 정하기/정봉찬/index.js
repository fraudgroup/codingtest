/*
✅문제 제목: 마구간 정하기

✅문제 유형: 이분검색

✅문제 풀이 날짜: 2024-08-18

💡문제 분석 요약
  - N개의 마구간이 수직선상에 있다. 각 마구간에는 한 마리의 말만 넣을 수 있다.
  - C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력한다.

💡알고리즘 설계
  - 배열을 오름차순 정렬한다.
  - start, end를 선언한다.
  - start는 1번 인덱스부터 순회하면서 직전 요소와의 차 중에서 최소값으로 초기화한다.
  - end는 (배열의 끝 요소 - 배열의 시작 요소)로 초기화한다.
  - start <= end 조건으로 while 문을 돈다.
  - mid를 선언하고 (start + end) / 2로 초기화한다.
  - count를 선언하고 1로 초기화한다. target을 선언하고 배열의 첫 요소로 초기화한다.
  - 배열의 1번 인덱스부터 순회하면서 현재 요소 - target이 mid보다 크거나 같을 때 target에 현재 요소를 담고 count를 1 더한다.
  - count가 c(말의 수)보다 작다면 end는 mid - 1로 할당하고 mid 값을 다시 구한다.
  - count가 c와 같거나 크다면 answer에 mid 값을 할당하고 start는 mid + 1로 할당하고 mid 값을 구한다.
*/

function getHorseCount(list, minDistance) {
  let count = 1;
  let target = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] - target < minDistance) {
      continue;
    }

    target = list[i];
    count++;
  }

  return count;
}

function solution(c, stable) {
  let answer;

  stable.sort((a, b) => a - b);

  let end = stable[stable.length - 1] - stable[0];
  let start = end;

  for (let i = 1; i < stable.length; i++) {
    const diff = stable[i] - stable[i - 1];
    start = Math.min(start, diff);
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (getHorseCount(stable, mid) < c) {
      end = mid - 1;
      continue;
    }

    start = mid + 1;
    answer = mid;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr)); // 3 [1, 4, 9]
let arr2 = [0, 2, 8, 4, 9, 13];
console.log(solution(4, arr2)); // 4 [0, 4, 8, 13]
