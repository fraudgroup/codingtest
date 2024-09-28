function solution(m, product) {
  let answer = 0;
  let sortProduct = [...product].sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

  for (i = 0; i < sortProduct.length; i++) {
    let cnt = 1;
    let money = m - sortProduct[i][1] - sortProduct[i][0] / 2;

    for (j = 0; j < sortProduct.length; j++) {
      if (i === j) {
        continue;
      }

      money = money - sortProduct[j][0] - sortProduct[j][1];

      if (money < 0) {
        break;
      }

      cnt += 1;
    }

    answer = Math.max(answer, cnt);
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
let arr1 = [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]];
let arr2 = [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]];
let arr3 = [[2, 12], [8, 4], [6, 6], [6, 7]];

console.log(solution(28, arr));
console.log(solution(41, arr1));
console.log(solution(41, arr2));
console.log(solution(33, arr3)); 