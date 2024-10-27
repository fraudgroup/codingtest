function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let revInt = parseInt(arr[i].toString().split("").reverse().join(""));
    if (isPrime(revInt)) {
      answer.push(revInt);
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
