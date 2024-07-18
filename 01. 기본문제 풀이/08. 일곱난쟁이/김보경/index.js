function solution(arr) {
  let answer = arr;

  let nineHeight = arr.reduce((acc, el) => acc + el, 0);

  let fakers = [];

  for (let i = 0; i < arr.length; i++) {
    let sevenHeight = 100;
    let eightHeight = nineHeight - arr[i];
    let faker = [];
    faker.push(i);
    if (eightHeight > sevenHeight) {
      for (let j = 0; j < arr.length; j++) {
        if (j === i) {
          continue;
        }

        if (eightHeight - arr[j] === sevenHeight) {
          faker.push(j);
        }
      }
    }

    if (faker.length >= 2) {
      fakers.push(faker);
    }
  }

  console.log(fakers);
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
