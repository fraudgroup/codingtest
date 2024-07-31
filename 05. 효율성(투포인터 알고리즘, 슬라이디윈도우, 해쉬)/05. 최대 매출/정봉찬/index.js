/*
✅문제 제목: 최대 매출

✅문제 유형: 효율성(슬라이딩 윈도우)

✅문제 풀이 날짜: 2024-07-31

💡문제 분석 요약
  - N일 동안의 매출기록을 보고 연속된 K일 동안의 최대 매출액을 구한다.
  - N(5<=N<=100,000), K(2<=K<=N)

💡알고리즘 설계
  - 합을 저장하는 변수를 선언한다.
  - 배열의 시작점부터 k일 까지의 반복문 돌면서 합 변수에 값을 더한다.
  - answer의 값을 합으로 초기화한다.
  - 배열의 시작점부터 (배열의 길이 - k) 까지 반복문 돌면서 합계에서 현재 반복문의 인덱스 값을 빼주고 현재 반복문의 인덱스 + k 번째 값을 더한다.
  - 이때 합이 answer의 값보다 크면 answer의 값을 합으로 변경한다.
*/

function solution(k, arr) {
  let answer;

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  answer = sum;

  for (let i = 0; i < arr.length - k; i++) {
    sum -= arr[i];
    sum += arr[i + k];

    if (sum > answer) {
      answer = sum;
    }
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
