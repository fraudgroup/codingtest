/*
✅문제 제목: 이분검색

✅문제 유형: 이분검색

✅문제 풀이 날짜: 2024-08-17

💡문제 분석 요약
  - N개의 수를 오름차순으로 정렬한 후 M이 몇 번째에 있는지 구하라.
  - 중복값은 없다.

💡알고리즘 설계
  - Array.prototype.sort 메서드로 오름차순 정렬한다.
  - start, end, mid를 선언하고 각가 0, arr.length - 1, Math.floor((start + end) / 2)로 초기화한다.
  - target !== arr[mid]의 조건으로 while문을 작성한다.
  - start가 end보다 크다면 break로 while문을 중단한다.
  - target이 arr[mid]의 값보다 크거나 작은지에 따라 start, end, mid를 설정한다.
*/

function solution(target, arr) {
  let answer;

  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (target !== arr[mid]) {
    if (start > end) {
      break;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  answer = mid + 1;

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr)); // 3
let arr2 = [23, 87, 65, 12, 57, 32, 99, 81, 11];
console.log(solution(32, arr2)); // 4

/*
✅문제 제목: 이분검색

✅문제 유형: 이분검색

✅문제 풀이 날짜: 2024-08-14

💡문제 분석 요약
  - N개의 수를 오름차순으로 정렬한 후 M이 몇 번째에 있는지 구하라.
  - 중복값은 없다.

💡알고리즘 설계
  - Array.prototype.sort 메서드로 오름차순 정렬한다.
  - start를 0, end를 (배열의 길이 - 1)로 정한다.
  - start <= end 조건으로 while 문으로 반복문을 돈다.
  - mid로 Math.floor((start + end) / 2)를 할당한다.
  - 만약 배열에서 mid번 째 요소가 target보다 작다면 end를 mid - 1로 할당한다. 아니라면 start를 mid + 1로 할당한다.
*/

function solution2(target, arr) {
  let answer;

  const sortedArr = arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (sortedArr[mid] === target) {
      answer = mid + 1;
      break;
    }

    if (sortedArr[mid] > target) {
      end = mid - 1;
      continue;
    }

    start = mid + 1;
  }

  return answer;
}

console.log(solution2(32, arr)); // 3
console.log(solution2(32, arr2)); // 4
