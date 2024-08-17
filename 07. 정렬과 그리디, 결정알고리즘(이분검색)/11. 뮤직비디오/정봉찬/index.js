/*
✅문제 제목: 뮤직비디오

✅문제 유형: ?

✅문제 풀이 날짜: 2024-08-17

💡문제 분석 요약
  - 한 노래는 한 개의 DVD에 녹화된다.
  - 노래의 순서는 유지되어야 한다.
  - DVD 크기(녹화 가능한 길이)는 최소로 M개의 DVD 크기를 모두 같은 크기로 녹화할 때 최소 DVD 크기를 구한다.

💡알고리즘 설계
  - 

💡브레인 스토밍
  - 어떠한 생각도 나질 않는다.
  - 우선 풀이 보고 학습 후 일주일 뒤에 복수하자.
*/

function getCount(list, max) {
  let count = 1;
  let sum = 0;

  for (item of list) {
    if (sum + item > max) {
      count++;
      sum = item;
      continue;
    }

    sum += item;
  }

  return count;
}

function solution(m, songs) {
  let answer;

  let start = Math.max(...songs);
  let end = songs.reduce((pre, cur) => pre + cur, 0);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (getCount(songs, mid) <= m) {
      answer = mid;
      end = mid - 1;
      continue;
    }

    start = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr)); // 17 [[1, 2, 3, 4, 5], [6, 7], [8, 9]]
console.log(solution(5, arr)); // 11 [[1, 2, 3, 4], [5, 6], [7], [8], [9]]
console.log(solution(6, arr)); // 9 [[1, 2, 3], [4, 5], [6], [7], [8], [9]]
