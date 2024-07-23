/*
✅문제 제목: 멘토링

✅문제 유형: 브루트 포스

✅문제 풀이 날짜: 2024-07-23

💡문제 분석 요약
  - 멘토와 멘티가 존재한다.
  - M번의 수학테스트 등수를 가지고 멘토와 멘티를 정한다.
  - 멘토는 M번의 수학테스트에서 모두 멘티보다 등수가 앞서야 한다.

💡알고리즘 설계
  - 꼴등을 한 번이라도 했으면 멘토를 할 수 없다. 즉, 1번, 2번 학생은 멘토를 할 수 없다.
  - 자신의 멘티가 될 수 있는 학생을 담는다. 수학테스트에서 한 번이라도 본인보다 등수가 높을 경우 멘티가 될 수 있는 학생에서 제거한다.
*/

function solution(test) {
  let answer = 0;
  const N = test[0].length;
  const M = test.length;

  const metorMenteeArr = Array(N)
    .fill()
    .map(() => Array(N).fill(1));

  for (let i = 0; i < M; i++) {
    const ranking = test[i];

    for (let j = 0; j < N; j++) {
      const me = ranking[j];
      const myMenteeArr = metorMenteeArr[me - 1];

      for (let k = 0; k <= j; k++) {
        const you = ranking[k];
        myMenteeArr[you - 1] = 0;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (metorMenteeArr[i][j]) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
