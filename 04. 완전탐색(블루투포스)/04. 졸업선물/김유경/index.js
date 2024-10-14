function solution(m, product) {
  let count = 0; // 구매할 수 있는 학생 수
  let price = 0; // 사용하는 금액

  // 배송비 + 할인된 물품 금액
  const totalPrice = (a, b) => {
    return a / 2 + b;
  };

  // 실제 사용할 금액으로 바꾼 뒤 오름차순 정렬하기
  const array = product
    .map((n) => totalPrice(n[0], n[1]))
    .sort((a, b) => a - b);

  // 앞에서부터 더해서, 예산을 넘었을 때는 count 하지 않은 채로 이전 count 값까지 return
  for (let i = 0; i < array.length; i++) {
    price += array[i];

    if (price < m) {
      count++;
    }
  }
  return count;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
