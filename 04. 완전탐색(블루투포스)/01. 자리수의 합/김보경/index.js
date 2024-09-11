function solution(n, arr) {
  let answer = 0;
  let array = [];

  arr.forEach((el) => {
    let sum = el
      .toString()
      .split("")
      .reduce((acc, el) => acc + Math.floor(+el), 0);
    array.push(sum);
  });

  let maxValue = array.map((el) => el === Math.max(...array) && el);
  let count = 0;

  maxValue.forEach((el, i) => {
    if (el) {
      count++;
      answer = arr[i];
    }
  });

  if (count > 1) {
    let value = 0;
    maxValue.forEach((el, i) => {
      if (el) {
        if (arr[i] > value) {
          value = arr[i];
        }
      }
    });

    answer = value;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
