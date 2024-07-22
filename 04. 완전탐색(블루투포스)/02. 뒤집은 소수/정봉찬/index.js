/*
✅문제 제목: 뒤집은 소수

✅문제 유형: 브루트 포스

✅문제 풀이 날짜: 2024-07-22

💡문제 분석 요약
  - N개의 자연수 배열이 입력된다.
  - 자연수를 뒤집었을 때 소수일 때 그 소수를 출력한다.

💡알고리즘 설계
  - 자연수의 수만큼 반복문을 돈다.
  - 자연수를 문자열, 배열로 변환 후 reverse로 뒤집는다.
  - 뒤집은 배열을 문자열, 숫자로 변환한다.
  - 뒤집은 숫자의 제곱근만큼 반복문을 돌며 소수 판별한다.
*/

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const reverseNum = parseInt([...num.toString()].reverse().join(''));

    if (reverseNum <= 1) {
      continue;
    }

    let isPassed = true;
    for (let j = 2; j <= Math.trunc(Math.sqrt(reverseNum)); j++) {
      if (reverseNum % j === 0) {
        isPassed = false;
        break;
      }
    }

    if (isPassed) {
      answer.push(reverseNum);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
