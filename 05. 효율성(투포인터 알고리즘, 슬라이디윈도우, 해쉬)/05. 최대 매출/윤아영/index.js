function solution(k, arr) {
  let pointer = k;
  let sum = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let maxSales = sum;

  while (pointer < arr.length) {
    sum -= arr[pointer - k];
    sum += arr[pointer++];

    maxSales = Math.max(sum, maxSales);
  }

  return maxSales;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
