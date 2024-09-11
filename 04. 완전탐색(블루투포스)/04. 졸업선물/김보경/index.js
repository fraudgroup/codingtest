function solution(m, product) {
  let answer = 0;
  let result = [];

  product.sort(
    (a, b) =>
      a.reduce((acc, el) => acc + el, 0) - b.reduce((acc, el) => acc + el, 0)
  );

  for (let i = 0; i < product.length; i++) {
    let count = 0;
    let limit = m;
    let hasCouponProduct = [...product];
    hasCouponProduct[i][0] = hasCouponProduct[i][0] / 2;

    hasCouponProduct.sort(
      (a, b) =>
        a.reduce((acc, el) => acc + el, 0) - b.reduce((acc, el) => acc + el, 0)
    );

    for (let j = 0; j < hasCouponProduct.length; j++) {
      if (i === j) continue;

      let price = hasCouponProduct[j].reduce((acc, el) => acc + el, 0);
      if (limit > price) {
        limit - price;
        count++;
      } else if (limit < price) {
        break;
      }
    }
    result.push(count);
  }
  answer = Math.max(...result);

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
