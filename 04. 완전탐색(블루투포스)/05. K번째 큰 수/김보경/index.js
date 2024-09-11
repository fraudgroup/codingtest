function solution(n, k, card) {
  let answer;
  let result = [];

  for (let i = 0; i < card.length; i++) {
    let sum = card[i];
    for (let j = 0; j < card.length; j++) {
      sum = sum + card[j];
      for (let k = 0; k < card.length; k++) {
        sum = sum + card[k];
        result.push(sum);
      }
    }
  }

  let arr = new Set([...result].sort((a, b) => b - a));
  answer = [...arr][k] || -1;

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
