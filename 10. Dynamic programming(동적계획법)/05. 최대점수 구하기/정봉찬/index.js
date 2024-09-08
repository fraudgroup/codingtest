/*
✅문제 제목: 최대점수 구하기

✅문제 유형: DP

✅문제 풀이 날짜: 2024-09-09

💡문제 분석 요약
  - N개의 문제가 있다. 각 문제는 점수와 푸는데 걸리는 시간이 주어진다.
  - 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 한다.
  - 문제의 개수 N(1<=N<=20), 제한시간 M(10<=M<=300)

💡알고리즘 설계
  - 제한 시간 + 1만큼의 dy 배열을 만들고 각 요소를 0으로 초기화한다.
  - arr을 제한시간을 기준으로 오름차순한다. 제한시간이 같다면 점수를 기준으로 내림차순한다.
  - arr을 길이만큼 i = 0부터 반복문을 돈다.
  - i번째 요소의 제한 시간을 j의 시작점으로 m까지 반복문을 돈다.
  - dy[j]에 dy[j]의 값과 (dy[j - i번째 요소의 제한 시간] + i번째 요소의 점수) 중에서 큰 값을 할당한다.
*/

function solution(m, arr) {
  let answer = 0;

  const dy = Array.from({ length: m + 1 }, () => 0);

  const sortedArr = arr.sort((a, b) => a[1] - b[1] || b[0] - a[0]);

  for (let i = 0; i < sortedArr.length; i++) {
    const [score, time] = sortedArr[i];
    for (let j = time; j <= m; j++) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  }

  answer = dy[m];

  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); // 41
