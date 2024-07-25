function solution(n, k, card) {
  let sums = [];
  card.forEach((firstCard, i) => {
    card.forEach((secondCard, j) => {
      if (i === j) return;
      card.forEach((thirdCard, k) => {
        if (i === k || j === k) return;
        sums.push(firstCard + secondCard + thirdCard);
      });
    });
  });

  return [...new Set(sums)].sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
