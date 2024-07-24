function solution(m, product) {
  let answer = 0;
  const totalPrices = product.map(([price, delivery]) => [price + delivery, price / 2 + delivery]);

  for (let i = 0; i < totalPrices.length; i++) {
    let sum = 0;
    const prices = totalPrices
      .map(([price, discount], index) => (index === i ? discount : price))
      .sort((a, b) => a - b);

    for (let j = 0; j < prices.length; j++) {
      sum += prices[j];

      if (sum > m) {
        answer = Math.max(answer, j);
        break;
      }

      if (j === prices.length - 1) {
        return j + 1;
      }
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
console.log(solution(28, arr));

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
); // 5

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
); // 5

console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
); //3
