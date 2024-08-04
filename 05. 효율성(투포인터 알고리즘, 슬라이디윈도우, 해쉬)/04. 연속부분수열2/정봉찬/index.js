/*
✅문제 제목: 연속부분수열2

✅문제 유형: 효율성(투포인터 알고리즘)

✅문제 풀이 날짜: 2024-07-30

💡문제 분석 요약
  - N개의 수로 이루어진 수열이 있다.
  - 연속부분수열의 합이 특정 숫자 M 이하가 되는 경우가 몇 번 있는지 구해라.

💡알고리즘 설계
  - 시작점과 끝점 포인터 변수를 선언한다.
  - 합을 담는 변수를 선언한다.
  - 시작점을 0으로 배열의 길이만큼 반복문을 돈다.
  - 시작점 반복문 안에서 (합 < m && 끝점 < 배열의 길이) 의 조건을 갖는 중첩 반복문을 선언한다.
  - 중첩 반복문 안에서 배열이 끝점을 인덱스로 하는 값이 m보다 작다면 경우의 수를 1 더한다.
  - (합 <= m) 이라면 경우의 수를 1 더한다.
  - 중첩 반복문이 종료되면 배열에서 시작점을 인덱스로하는 값을 합에서 빼준다.
  - 1 3 1 2 3
  - {1} {3} {1 3} {1} {1 3 1} {3 1} {2} {1 2} {3} {2 3}

❌ 일주일 뒤에 다시 풀어보기...
*/

function solution(m, arr) {
  let answer = 0;

  // let endPointer = 0;
  // let sum = 0;
  // const list = [];
  // for (let startPointer = 0; startPointer < arr.length; startPointer++) {
  //   while (sum < m && endPointer < arr.length) {
  //     const endValue = arr[endPointer];

  //     if (endValue <= m) {
  //       answer++;
  //     }

  //     sum += endValue;

  //     if (sum !== endValue && sum <= m) {
  //       answer++;
  //     }
  //   }

  //   sum -= arr[startPointer];
  // }

  return answer;
}

let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

/*
✅문제 풀이 날짜: 2024-08-04

💡알고리즘 설계
  - 시작 포인터 변수 startPointer를 0으로 초기화 선언한다.
  - 합 변수 sum을 0으로 초기화 선언한다.
  - endPointer를 0으로 시작하는 for 반복문을 arr의 길이 만큼 반복한다. 이때 증감식은 endPointer + 1 한다.
  - 반복문이 시작되면 sum에 arr[endPointer]를 더한다.
  - while 문으로 sum > m && startPointer < endPointer 일 때 sum - arr[startPointer++]을 반복한다.
  - while 문이 종료되면 if 문으로 sum <= m 일 때 answer를 answer + endPointer - startPointer + 1 한다.

✅ 복수 성공
*/

function solution2(m, arr) {
  let answer = 0;

  let startPointer = 0;
  let sum = 0;

  for (let endPointer = 0; endPointer < arr.length; endPointer++) {
    sum += arr[endPointer];

    while (sum > m && startPointer < endPointer) {
      sum -= arr[startPointer++];
    }

    answer += endPointer - startPointer + 1;
  }

  return answer;
}

console.log(solution2(5, a));
