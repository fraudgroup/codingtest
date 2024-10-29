function solution(m, product) {
  let answer = 0;

  // 상품가격 + 배송비 오름차순 (예산 내 최대한 많은 학생에게 선물을 주기 위해)
  let sortArr = product.sort((a, b) => {
    let totalA = a[0] + a[1];
    let totalB = b[0] + b[1];
    return totalA - totalB;
  });

  // idx번 학생 => 할인된 가격 적용
  for (let idx = 0; idx < sortArr.length; idx++) {
    let sum = 0;
    let count = 0; // 선물 줄 수 있는 학생 수

    sum += sortArr[idx][0] / 2 + sortArr[idx][1];
    count++;

    for (let i = 0; i < sortArr.length; i++) {
      if (idx === i) continue;
      sum += sortArr[i][0] + sortArr[i][1];

      if (sum > m) break;

      count++;

      if (sum === m) break;
    }

    answer = Math.max(answer, count);
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
console.log(solution(28, arr));
