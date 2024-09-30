function solution(n, k, card) {
  let answer;
  let arr = new Set;

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      for (x = j + 1; x < n; x++) {
        arr.add(card[i] + card[j] + card[x]);
      }
    }
  }

  answer = Array.from(arr).sort((a, b) => b - a);

  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
