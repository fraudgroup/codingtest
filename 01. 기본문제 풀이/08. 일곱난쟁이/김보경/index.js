function solution(arr) {
  let answer = arr;

  let nineHeight = answer.reduce((acc, el) => acc + el, 0);

  for (let i = 0; i < answer.length; i++) {
    let test = [...answer];
    let sevenHeight = 100;
    let eightHeight = nineHeight - test[i];
    test.pop(i);
    if (eightHeight > sevenHeight) {
      for (let j = 0; j < test.length; j++) {
        if (eightHeight - test[j] === sevenHeight) {
          test.pop(j);
        }
      }
    }

    if (test.length === 7) {
      answer = test;
    }
  }

  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
