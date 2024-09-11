function solution(test) {
  let answer = 0;
  let testResult = new Array(arr[0].length).fill(0);

  arr.forEach((el) => {
    el.forEach((ell, i) => {
      if (testResult[i] < ell) {
        testResult[i] = ell;
      }
    });
  });

  for (let i = 0; i < testResult.length; i++) {
    let mento = testResult[i];

    for (let j = 0; j < testResult.length; j++) {
      let menty = testResult[j];
      if (i === j) continue;

      if (mento < menty) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
