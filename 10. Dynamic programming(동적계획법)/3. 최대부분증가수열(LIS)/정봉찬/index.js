/*
✅문제 제목: 최대부분증가수열(LIS)

✅문제 유형: DP(LIS)

✅문제 풀이 날짜: 2024-09-09

💡문제 분석 요약
  - 작은 수에서 큰 수로 가장 길게 증가하는 원소들의 집합을 찾아라.

💡알고리즘 설계
  - 수열에서 각 요소까지의 집합의 길이를 담을 dy 변수를 수열의 길이만큼 0을 갖는 배열을 만든다.
  - dy의 첫 요소는 비교 대상이 없기 때문에 1로 할당한다.
  - 수열의 길이만큼 반복문을 돈다.
  - 최대 길이를 저장할 max 변수를 0으로 선언한다.
  - 직전 요소에서 첫 번째 인덱스 요소까지 거꾸로 반복문을 돈다.
  - i 번째 요소가 j 번째 요소보다 작다면 max 값과 dy[j] 요소의 값 중에서 큰 값을 max에 할당한다.
  - dy[i]에 max를 할당하는데 max가 0이라면 1을 할당하고 아니라면 max + 1을 할당한다.
*/

function solution(arr) {
  let answer = 0;

  const dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      const pre = arr[j];

      if (pre >= cur) {
        continue;
      }

      max = Math.max(max, dy[j]);
    }

    dy[i] = max ? max + 1 : 1;
  }

  answer = Math.max(...dy);

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr)); // 4
