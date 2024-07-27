/*
✅문제 제목: 공통원소구하기

✅문제 유형: 효율성(해쉬)

✅문제 풀이 날짜: 2024-07-27

💡문제 분석 요약
  - 두 집합의 공통 원소를 오름차순 정렬하여 출력한다.

💡알고리즘 설계
  - Map 자료구조 변수를 선언한다.
  - 두 집합을 각각 반복문 돌면서 값으로 Map의 key에 접근해서 있으면 value를 1 더하고 없으면 0으로 초기값을 준다.
  - Map을 for of로 순회하면서 value가 2인 key를 answer에 push한다.
*/

function solution(arr1, arr2) {
  let answer = [];

  const valueCountMap = new Map();

  arr1.forEach((num) => {
    valueCountMap.set(num, (valueCountMap.get(num) || 0) + 1);
  });

  arr2.forEach((num) => {
    valueCountMap.set(num, (valueCountMap.get(num) || 0) + 1);
  });

  for (const [key, value] of valueCountMap) {
    if (value < 2) {
      continue;
    }

    answer.push(key);
  }

  answer = answer.sort((a, b) => a - b).join(' ');

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
