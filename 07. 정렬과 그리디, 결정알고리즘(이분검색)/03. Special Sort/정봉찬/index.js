/*
✅문제 제목: Special Sort

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-13

💡문제 분석 요약
  - 음수 정수는 앞쪽에 양의 정수는 뒷쪽에 있어야 한다.
  - 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.

💡알고리즘 설계
  - ⭐️ 선택정렬
  - 배열의 길이 - 1 만큼을 반복하는 반복문을 선언한다.
  - 최소값의 인덱스를 저장할 변수 minIndex를 선언하고 외부 반복문의 인덱스로 초기화한다.
  - 외부 반복문의 인덱스 + 1을 시작으로 배열의 길이 - 1 만큼을 반복하는 중첩 반복문을 선언한다.
  - minIndex의 값보다 중첩 반복문의 현재 값이 더 작다면 minIndex를 중첩 반복문의 인덱스로 교체한다.
  - 이때 minIndex의 값과 중첩 반복문의 현재 값이 모두 음수라면 절대값 비교를 해야 한다.
  - 중첩 반복문 종료 후 외부 반복문의 인덱스 값과 minIndex 값을 스왑한다.
*/

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < 0 && arr[minIndex] < 0) {
        if (Math.abs(arr[j]) >= Math.abs(arr[minIndex])) {
          continue;
        }
      }

      if (arr[j] >= arr[minIndex]) {
        continue;
      }

      minIndex = j;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

/*
✅문제 제목: Special Sort

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-13

💡문제 분석 요약
  - 음수 정수는 앞쪽에 양의 정수는 뒷쪽에 있어야 한다.
  - 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.

💡알고리즘 설계
  - ⭐️ 버블정렬
  - i = 0부터 배열의 길이 - 1 만큼을 반복하는 반복문을 선언한다.
  - j = 0부터 배열의 길이 - i - 1 만큼을 반복하는 반복문을 선언한다.
  - j의 값이 j + 1보다 크다면 j와 j + 1의 값을 교체한다. 단, j의 값과 j + 1의 값이 음수이면 절대값으로 비교한다.
*/

function solution2(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < 0 && arr[j + 1] < 0) {
        if (arr[j] * -1 < arr[j + 1] * -1) {
          continue;
        }
      }

      if (arr[j] < arr[j + 1]) {
        continue;
      }

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
}

console.log(solution2(arr));
