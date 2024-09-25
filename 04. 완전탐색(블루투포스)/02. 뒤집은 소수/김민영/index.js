function solution(arr) {
  let answer = [];

  for (num of arr) {
    let x = +(String(num).split('').reverse().join(''))
    let isPrime = true;

    if (x === 1) {
      continue;
    }

    for (i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      answer.push(x);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
