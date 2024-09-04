/*
✅문제 제목: 순열 구하기

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-08-31

💡문제 분석 요약
  - 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력한다.
  - N(3<=N<=10), M(2<=M<=N)
  - N개의 자연수는 오름차순

💡알고리즘 설계
  - 인덱스와 배열을 받는 재귀함수를 선언한다.
  - 반복문을 돌면서 현재 반복문의 인덱스가 매개변수 인덱스 - 1과 같으면 continue한다.
  - 그렇지 않은 경우 재귀함수를 호출한다. 인수로는 인덱스 + 1과 넘겨받은 배열과 현재 인덱스의 요소를 합친 새로운 배열을 넣어준다.
  - 배열의 길이가 m이 되면 answer에 push하고 함수를 종료한다.
*/

function solution(m, arr) {
  let answer = [];

  function DFS(index, set) {
    if (set.length === m) {
      answer.push(set);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (i === index - 1) {
        continue;
      }
      DFS(i + 1, [...set, arr[i]]);
    }
  }

  DFS(0, []);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr)); // [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

/*
✅문제 제목: 순열 구하기

✅문제 유형: 재귀

✅문제 풀이 날짜: 2024-09-04

💡문제 분석 요약
  - 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력한다.
  - N(3<=N<=10), M(2<=M<=N)
  - N개의 자연수는 오름차순

💡알고리즘 설계
  - ⭐ 아영님 피드백 "순열은 서로 다른 n개의 원소를 가지는 어떤 집합에서 중복 없이 순서에 상관있게 r개의 원소를 선택하거나 혹은 나열하는 것"
  - 배열에서 이미 선택한 인덱스의 요소를 slice로 제거해서 넘겨준다. (중복 없이 선택 가능)
  - slice의 길이만큼 재귀 함수로 순열을 만든다.
  - 순열 길이가 m이 되면 answer에 push하고 함수를 종료한다.
*/

function solution2(m, arr) {
  let answer = [];

  function DFS(array, slice) {
    if (array.length === m) {
      answer.push(array);
      return;
    }

    for (let i = 0; i < slice.length; i++) {
      DFS([...array, slice[i]], [...slice.slice(0, i), ...slice.slice(i + 1)]);
    }
  }

  DFS([], [...arr]);

  return answer;
}

console.log(solution2(2, arr)); // [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]
console.log(solution2(3, arr)); // [[3, 6, 9], [3, 9, 6], [6, 3, 9], [6, 9, 3], [9, 3, 6], [9, 6, 3]]
