function solution(m, product) {
  let count = 0; // 구매할 수 있는 학생 수
  let price = 0; // 사용하는 금액

  // 배송비 + 할인된 물품 금액
  const salePrice = (a, b) => {
    return a / 2 + b;
  };

  // 물품 금액 합
  const totalPrice = (a, b) => {
    return a + b;
  };

  // 상품 가격 비싼놈 맨 앞에 세워서 반값 쿠폰 쓰고, 나머지는 물품 값 합계 구한 다음 오름차순으로 정렬
  const array = product
    .sort((a, b) => b[0] - a[0])
    .map((n, index) => {
      if (index === 0) {
        return salePrice(n[0], n[1]);
      }

      return totalPrice(n[0], n[1]);
    })
    .sort((a, b) => a - b);

  // 앞에서부터 더해서, 예산을 넘었을 때는 count 하지 않은 채로 이전 count 값까지 return
  for (let i = 0; i < array.length; i++) {
    if (price + array[i] > m) break;
    price += array[i];
    count++;
  }
  return count;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
// 답 : 4

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
);
// 답 : 5

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
);
// 답 : 5

console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
); // 답 : 3
