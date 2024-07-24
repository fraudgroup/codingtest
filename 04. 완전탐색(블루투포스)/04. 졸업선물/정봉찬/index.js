/*
✅문제 제목: 졸업선물

✅문제 유형: 브루트 포스

✅문제 풀이 날짜: 2024-07-24

💡문제 분석 요약
  - 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구한다.
  - 상품 하나의 가격을 50% 할인해서 구매할 수 있다. 배송비는 할인에 포함되지 않는다.
  - 상품가격은 짝수로만 입력된다.
  - 최소 1개 이상의 상품을 살 수 있다.

💡알고리즘 설계
  - 학생수만큼 반복문을 돈다. 그 안에서 학생수만큼 반복문을 다시 돈다.
  - 외부 반복문의 인덱스와 내부 반복문의 인덱스가 같으면 continue한다.
  - 예산(m) 이하로 구매 가능한 학생 수를 계산해서 가장 많은 학생 수 케이스를 출력값에 넣는다.
*/

function solution(m, product) {
  let answer = 0;

  for (let i = 0; i < product.length; i++) {
    let totalPay = product[i][0] / 2 + product[i][1];
    let productCount = 1;

    for (let j = 0; j < product.length; j++) {
      if (i === j) {
        continue;
      }

      totalPay += product[j][0] / 2 + product[j][1];

      if (totalPay > m) {
        break;
      }

      productCount++;
    }

    if (productCount > answer) {
      answer = productCount;
    }
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
let arr2 = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [12, 1],
];
let arr3 = [
  [8, 6],
  [2, 2],
  [12, 1],
  [4, 5],
  [4, 3],
];
let arr4 = [
  [2, 12],
  [8, 4],
  [6, 6],
  [6, 7],
];
console.log(solution(28, arr)); // 4
console.log(solution(41, arr2)); // 5
console.log(solution(41, arr3)); // 5
console.log(solution(33, arr4)); // 3
