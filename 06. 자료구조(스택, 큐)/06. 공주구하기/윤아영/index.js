function solution(n, k) {
  const prices = Array.from({ length: n }, (_, i) => i + 1);

  while (prices.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      prices.push(prices.shift());
    }

    prices.shift();
  }

  return prices[0];
}

console.log(solution(8, 3));
