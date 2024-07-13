/*
✅문제 제목: 등수구하기

✅문제 유형: 배열 탐색

✅문제 풀이 날짜: 2024-07-11

💡문제 분석 요약
  - 학생의 점수로 학생의 등수를 출력한다.
  - 92점이 1등이고 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

💡알고리즘 설계
  - 점수가 높은 순으로 정렬한 배열을 만든다.
  - 원본 배열을 반복문 돌면서 정렬한 배열에서 indexOf로 index를 구하고 1을 더하면 등수가 된다.
*/

function solution(arr) {
  let answer = [];

  const sortedArr = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i]) + 1);
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [92, 87, 92, 76, 92];
console.log('예상 결과: 4 3 2 1 5 -> ', solution(arr));
console.log('예상 결과: 1 4 1 5 1 -> ', solution(arr2));

/*
✅문제 풀이 날짜: 2024-07-11
*/

function solution2(arr) {
  let answer = [];
  let scoreMap = new Map();

  [...arr]
    .sort((a, b) => b - a)
    .forEach((score, index) => {
      scoreMap.set(score, scoreMap.get(score) || index + 1);
    });

  for (let i = 0; i < arr.length; i++) {
    answer.push(scoreMap.get(arr[i]));
  }

  return answer;
}

console.log('예상 결과2: 4 3 2 1 5 -> ', solution2(arr));
console.log('예상 결과2: 1 4 1 5 1 -> ', solution2(arr2));
