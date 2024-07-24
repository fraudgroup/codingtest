function solution(m, product) {
  let sums = [];

  for (let i = 0; i < product.length; i++) {
    sums.push(product[i][0] + product[i][1]);
  }

  sums = sums.sort((a, b) => a - b);

  let buyProducts = 0;
  let currentPrice = 0;

  for (let i = 0; i < sums.length; i++) {
    if (currentPrice + sums[i] <= m) {
      currentPrice += sums[i];
      buyProducts++;
    } else {
      break;
    }
  }

  if (buyProducts < product.length) {
    const nextProductPrice = product[buyProducts][0];
    const nextDeliveryPrice = product[buyProducts][1];

    if (currentPrice + nextProductPrice / 2 + nextDeliveryPrice <= m) {
      buyProducts++;
    }
  }
  return buyProducts;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
// console.log(
//   solution(41, [
//     [8, 6],
//     [2, 2],
//     [12, 1],
//     [4, 5],
//     [4, 3],
//   ])
// );
