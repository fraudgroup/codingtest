/*
✅문제 제목: 좌표 정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-15

💡문제 분석 요약
  - 좌표 리스트가 주어졌을 때 좌표를 오름차순으로 정렬하세요.
  - 정렬기준은 x 값에 의해서 정렬하고, x 값이 같은 경우 y 값에 의해 정렬한다.

💡알고리즘 설계
  - ⭐️삽입정렬
  - i = 1부터 배열의 길이만큼 반복문을 돈다.
  - j = i - 1부터 0보다 크거나 같은 조건으로 중첩 반복문을 돈다.
  - 만약 j[0]가 j + 1[0]보다 큰 경우 break 문으로 중첩 반복문을 중단한다.
  - j[0]과 j + 1[0]이 같다면 j[1]과 j + 1[1]도 마찬가지로 비교해서 j가 더 크다면 j와 j + 1의 값을 바꾼다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j][0] < arr[j + 1][0]) {
        break;
      }

      if (arr[j][1] < arr[j + 1][1]) {
        break;
      }

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr)); // [[1, 2], [1, 3], [2, 5], [2, 7], [3, 6]]

/*
✅문제 제목: 좌표 정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-15

💡문제 분석 요약
  - 좌표 리스트가 주어졌을 때 좌표를 오름차순으로 정렬하세요.
  - 정렬기준은 x 값에 의해서 정렬하고, x 값이 같은 경우 y 값에 의해 정렬한다.

💡알고리즘 설계
  - ⭐️버블정렬
  - i = 0부터 배열의 길이 - 1 만큼 반복문을 돈다.
  - j = 0부터 배열의 길이 - i - 1 만큼 반복문을 돈다.
  - j[0]의 값이 j + 1[0]보다 작다면 continue 한다.
  - j[0]과 j + 1[0]의 값이 같을 때, j[1]의 값이 j + 1[1]보다 작다면 continue 한다.
  - 그 외에는 j와 j + 1의 값을 교체한다.
*/

function solution2(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][0] < arr[j + 1][0]) {
        continue;
      }

      if (arr[j][1] < [j + 1][1]) {
        continue;
      }

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
}

console.log(solution2(arr)); // [[1, 2], [1, 3], [2, 5], [2, 7], [3, 6]]

/*
✅문제 제목: 좌표 정렬

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-15

💡문제 분석 요약
  - 좌표 리스트가 주어졌을 때 좌표를 오름차순으로 정렬하세요.
  - 정렬기준은 x 값에 의해서 정렬하고, x 값이 같은 경우 y 값에 의해 정렬한다.

💡알고리즘 설계
  - ⭐️선택정렬
  - i = 0부터 배열의 길이 - 1만큼 반복문을 돈다.
  - 최소값의 인덱스를 담을 minIndex를 선언하고 i로 초기화한다.
  - j = i + 1부터 배열의 길이만큼 중첩 반복문을 돈다.
  - j[0]의 값이 minIndex[0]보다 크다면 continue한다.
  - j[1]의 값이 minIndex[1]보다 크다면 continue한다.
  - 그 외에는 j의 값을 minIndex에 넣어준다.
  - 중첩 반복문이 종료되면 i와 minIndex의 값을 교체한다.
*/

function solution3(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] > arr[minIndex][0]) {
        continue;
      }

      if (arr[j][1] > arr[minIndex][1]) {
        continue;
      }

      minIndex = j;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return answer;
}

console.log(solution3(arr)); // [[1, 2], [1, 3], [2, 5], [2, 7], [3, 6]]
