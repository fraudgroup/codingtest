function solution(n, k, card) {
  const sums = new Set();

  card.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let l = j + 1; l < n; l++) {
        const sum = card[i] + card[j] + card[l];

        sums.add(sum);

        if (sums.size === k) {
          return sum;
        }
      }
    }
  }

  return -1;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
