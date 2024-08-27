function solution(arr) {
  let answer = [];
  let array = arr.map((el) => el.toString().split("").reverse().join("") * 1);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) continue;

    let isPrime = true;
    for (let j = 2; j <= parseInt(Math.sqrt(array[i])); j++) {
      if (array[i] % j === 0) {
        isPrime = false;
        break;
      }
    }

    isPrime && answer.push(array[i]);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
