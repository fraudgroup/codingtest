function solution(m, product) {
  let sums = product.map((el) => el[0] + el[1]);

  sums.sort((a, b) => a - b);

  let buyProducts = 0;
  let currentPrice = 0;

  for (let i = 0; i < sums.length; i++) {
    if (currentPrice + sums[i] > m) {
      break;
    }
    currentPrice += sums[i];
    buyProducts++;
  }

  if (buyProducts < product.length) {
    let maxSavings = 0;
    for (let i = 0; i < buyProducts; i++) {
      let savings = product[i][0] / 2;
      if (savings > maxSavings) {
        maxSavings = savings;
      }
    }
    const nextProduct = product[buyProducts];

    if (currentPrice + nextProduct[0] / 2 + nextProduct[1] - maxSavings <= m) {
      buyProducts++;
    }
  }
  return buyProducts;
}

console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
);
