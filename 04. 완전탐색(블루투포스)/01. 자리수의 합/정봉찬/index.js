/*
✅문제 제목: 자리수의 합

✅문제 유형: 완전 탐색(블루투포스)

✅문제 풀이 날짜: 2024-07-19

💡문제 분석 요약
  - 자연수의 자릿수의 합을 구한다. 그 합이 최대인 자연수를 출력한다.
  - 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 출력한다.

💡알고리즘 설계
  - 자연수 배열을 반복문 돌면서 자릿수의 합이 최대일 때 자연수의 크기를 비교한다.
*/

function solution(n, arr) {
  let answer;
  let maxKey = 0;
  let maxValue = 0;

  for (let i = 0; i < n; i++) {
    const current = arr[i];
    const sum = [...current.toString()].reduce((pre, cur) => pre + +cur, 0);

    if (sum < maxValue) {
      continue;
    }

    if (sum === maxValue) {
      maxKey = maxKey > current ? maxKey : current;
      continue;
    }

    maxKey = current;
    maxValue = sum;
  }

  answer = maxKey;

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
let arr2 = [111, 22];
console.log(solution(7, arr));
console.log(solution(2, arr2));
