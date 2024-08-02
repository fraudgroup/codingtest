function solution(k, arr) {
  let answer = [];
  let pointer1 = 0;
  let pointer2 = 0;
  let sum = 0;

  while (pointer2 < arr.length) {
    sum += arr[pointer2++];

    while (pointer1 < pointer2 && pointer2 - pointer1 > k) {
      sum -= arr[pointer1++];
    }

    if (pointer2 - pointer1 === k) {
      console.log(pointer1, pointer2, answer);
      answer.push(sum);
    }
  }
  return Math.max(...answer);
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
