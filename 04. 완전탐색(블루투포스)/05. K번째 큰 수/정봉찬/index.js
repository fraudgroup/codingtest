/*
✅문제 제목: K번째 큰 수

✅문제 유형: 브루트 포스

✅문제 풀이 날짜: 2024-07-25

💡문제 분석 요약
  - 1부터 100사이의 자연수가 적힌 N장의 카드가 있다.
  - 같은 숫자의 카드가 여러 장 있을 수 있다.
  - 3장의 카드를 뽑아 합한 값을 기록한다.
  - 모든 경우의 수를 기록하고 K번째로 큰 수를 출력한다.

💡알고리즘 설계
  - 카드를 내림차순 정렬한다.
  - 카드를 3장 뽑아 합한 값을 담을 Set 자료구조 변수에 담는다.
  - Set 자료구조 변수를 배열로 변환 후 내림차순 정렬한다.
  - 배열의 길이가 k보다 작을 경우 -1을 반환하고 아니라면 k - 1 번째 수를 반환한다.
*/

function solution(n, k, card) {
  let answer;
  const NOT_FOUND = -1;

  const sortedCardList = card.sort((a, b) => b - a);
  const uniqueCardSumSet = new Set();

  for (let i = 0; i < n; i++) {
    const first = sortedCardList[i];

    for (let j = i + 1; j < n; j++) {
      const second = sortedCardList[j];

      for (let k = j + 1; k < n; k++) {
        const third = sortedCardList[k];

        const sum = first + second + third;
        uniqueCardSumSet.add(sum);
      }
    }
  }

  const cardSumList = [...uniqueCardSumSet].sort((a, b) => b - a);

  answer = cardSumList.length < k ? NOT_FOUND : cardSumList[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]; // 143
let arr2 = [10, 10, 9, 9, 8, 8]; // 27
console.log(solution(10, 3, arr));
console.log(solution(6, 3, arr2));
